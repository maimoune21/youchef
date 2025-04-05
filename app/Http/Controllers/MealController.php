<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Storage;

class MealController extends Controller
{
  /**
   * Display a listing of the Meals.
   */
  public function index(Request $request)
  {
    $dataMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
      ->select(
        'meals.*',
        'users.idUser as idUser',
        'users.firstName as userFName',
        'users.lastName as userLName',
        'users.profile_img as userImage'
      )
      ->latest()
      ->get();
    $Kitchen = DB::table("kitchens")->get();
    $dataCategories = Category::all();
    $categorySelected = $request->query('category');
    $kitchenSelected = $request->query('kitchen');
    $search = $request->query('search');

    $thisUser = Auth::user();
    $mealsfav = collect();

    if ($thisUser) {
      $mealsfav = DB::table('user__meal__favorite')
        ->where('idUser', $thisUser->idUser)
        ->pluck('idMeal');
    }

    $favoriteMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
      ->whereIn('meals.idMeal', $mealsfav)
      ->select(
        'meals.*',
        'users.idUser as idUser',
        'users.firstName as userFName',
        'users.lastName as userLName',
        'users.profile_img as userImage'
      )
      ->orderBy('meals.views', 'desc')
      ->get();

    $SearchedMeals = Meal::latest()->get();

    return inertia("meals/Meals", compact("dataMeals", "Kitchen", "dataCategories", "categorySelected", "kitchenSelected", "thisUser", "favoriteMeals", "search", "SearchedMeals"));
  }

  /**
   * Display Popular Meals
   */
  public function popularMeals()
  {
    $popularMeals = 'test';
    return inertia('general/Home', compact('popularMeals'));
  }

  /**
   * Show the form for creating a new Meal.
   */
  public function create()
  {
    $Kitchens = DB::table("kitchens")->get();
    $dataCategories = Category::all();
    return inertia("meals/postMeal", compact("Kitchens", "dataCategories"));
  }

  /**
   * Store a newly created Meal in storage.
   */

  public function store(Request $request)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'description' => 'required|string',
      'idKitchen' => 'required|exists:kitchens,idKitchen',
      'idCategory' => 'required|exists:categories,idCategory',
      'meal_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'hours' => 'required|integer|min:0|max:23',
      'minutes' => 'required|integer|min:0|max:59',
      'ingredients' => 'required|array|min:1',
      // for validate all ingredients must be required and string and minimum 1 letters: 
      'ingredients.*' => 'required|string|min:1',
      'instructions' => 'required|array|min:1',
      // 7ta instructions: 
      'instructions.*' => 'required|string|min:1',
    ]);

    $meal = new Meal();
    $meal->title = $validated['title'];
    $meal->description = $validated['description'];
    $meal->idKitchen = $validated['idKitchen'];
    $meal->idCategory = $validated['idCategory'];
    $meal->duration = sprintf('%02d:%02d:00', $validated['hours'], $validated['minutes']);
    // json_encode converts the php array to json string for storage in database
    // array_values for organisation index(keys) of array values after json_encode
    // array_filter remove from array all values : ''  /  null  /  empty  / false 
    $meal->ingredients = json_encode(array_values(array_filter($validated['ingredients'])));
    $meal->instructions = json_encode(array_values(array_filter($validated['instructions'])));
    $meal->idUser = Auth::id();
    $meal->save();

    // image upload in public after meal is created
    if ($request->hasFile('meal_img')) {
      $extension = $request->file('meal_img')->getClientOriginalExtension();
      $filename = 'Meal' . $meal->idMeal . '.' . $extension;
      
      // $path = $request->file('meal_img')->storeAs($filename);
      $request->file('meal_img')->storeAs('meals', $filename, 'public');
      $meal->meal_img = $filename;
      $meal->save();
    }

    return redirect()->route('meals');
  }

  /**
   * Display the specified Meal.
   */
  public function show($id)
  {
    $meal = Meal::find($id);
    if (!$meal) {
      abort(404);
    }
    // Fetching the user who posted the meal :
    $user = DB::table('users')
      ->where('idUser', $meal->idUser)
      ->select('idUser', 'firstName', 'lastName', 'profile_img', 'email', 'bio')
      ->first();


    // Fetching category and kitchen of the meal :
    $categories = DB::table('categories')->pluck('name', 'idCategory')->toArray();
    $kitchens = DB::table('kitchens')->pluck('name', 'idKitchen')->toArray();
    $categoryName = $categories[$meal->idCategory] ?? 'Unknown Category';
    $kitchenName = $kitchens[$meal->idKitchen] ?? 'Unknown Kitchen';

    // Fetching the meal comments :
    $comments = DB::table('comments')
      ->where('comments.idMeal', $meal->idMeal)
      ->join('users', 'comments.idUser', '=', 'users.idUser')
      ->select('comments.*', 'users.firstName', 'users.lastName', 'users.profile_img')
      ->orderBy('comments.created_at', 'desc')
      ->get();

    $thisUser = Auth::user();
    $mealsfav = collect();

    if ($thisUser) {
      $mealsfav = DB::table('user__meal__favorite')
        ->where('idUser', $thisUser->idUser)
        ->pluck('idMeal');
    }

    $favoriteMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
      ->whereIn('meals.idMeal', $mealsfav)
      ->select(
        'meals.*',
        'users.idUser as idUser',
        'users.firstName as userFName',
        'users.lastName as userLName',
        'users.profile_img as userImage'
      )
      ->orderBy('meals.views', 'desc')
      ->get();
    $SearchedMeals = Meal::latest()->get();

    // Passing data to the view :
    return inertia('meals/MealDetails', compact('meal', 'user', 'categoryName', 'kitchenName', 'comments', 'thisUser', 'favoriteMeals', 'SearchedMeals'));
  }

  /**
   * Show the form for editing the specified Meal.
   */
  public function edit(Meal $meal)
  {
    //
  }

  /**
   * Update the specified Meal in storage.
   */
  public function update(Request $request, $idmeal)
  {
    $meal = Meal::findOrFail($idmeal);

    // $validated = $request->validate([
    //     'title' => 'required|string|max:255',
    //     'description' => 'required|string',
    //     'idKitchen' => 'required|exists:kitchens,idKitchen',
    //     'idCategory' => 'required|exists:categories,idCategory',
    //     'meal_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    //     'hours' => 'required|integer|min:0|max:23',
    //     'minutes' => 'required|integer|min:0|max:59',
    //     'ingredients' => 'required|array|min:1',
    //     'ingredients.*' => 'required|string|min:1',
    //     'instructions' => 'required|array|min:1',
    //     'instructions.*' => 'required|string|min:1',
    // ]);

    // Update basic fields
    // $meal->update([
    //     'title' => $validated['title'],
    //     'description' => $validated['description'],
    //     'idKitchen' => $validated['idKitchen'],
    //     'idCategory' => $validated['idCategory'],
    //     'duration' => sprintf('%02d:%02d:00', $validated['hours'], $validated['minutes']),
    //     'ingredients' => json_encode(array_values(array_filter($validated['ingredients']))),
    //     'instructions' => json_encode(array_values(array_filter($validated['instructions']))),
    // ]);

    $meal->update([
      'title' => $request->title ?? "ttt",
      'description' => $request->description ?? "ddddd",
      'idKitchen' => $request->idKitchen ?? 2,
      'idCategory' => $request->idCategory ?? 4,
      'duration' => sprintf('%02d:%02d:00', 
        $request->hours ?? 0, 
        $request->minutes ?? 9
      ),
      'ingredients' => json_encode($request->ingredients ?? ['']),
      'instructions' => json_encode($request->instructions ?? ['']),
    ]);

    $meal->save();


    // if ($meal->meal_img != $request->meal_img)
    // {
    //   Storage::disk('public')->delete($meal->meal_img);
    //   $extension = $request->file('meal_img')->getClientOriginalExtension();
    //   $filename = 'Meal' . $meal->idMeal . '.' . $extension;
    //   $request->file('meal_img')->storeAs('meals', $filename, 'public');
    //   $meal->meal_img = $filename;
    //   $meal->save();
    // };

    if ($request->hasFile('meal_img')) {
      Storage::disk('public')->delete($meal->meal_img);
      $extension = $request->file('meal_img')->getClientOriginalExtension();
      $filename = 'Meal' . $meal->idMeal . '.' . $extension;
      $request->file('meal_img')->storeAs('meals', $filename, 'public');
      $meal->meal_img = $filename;
      $meal->save();
    }
    $meal->save();
    return redirect()->back()->with('updated', 'Meal updated successfully!');
  }

  /**
   * Increment the likes count for a meal.
   */
  public function like($id)
  {
    $meal = Meal::find($id);
    if ($meal) {
      $meal->increment('likes');
    }
  }

  /**
   * Decrement the likes count for a meal.
   */
  public function dislike($id)
  {
    $meal = Meal::find($id);
    if ($meal && $meal->likes > 0) {
      $meal->decrement('likes');
    }
  }

  /**
   * Commenting.
   */
  public function addComment(Request $request, $id)
  {
    $request->validate([
      'comment' => 'required|string|max:500',
    ]);
    $idUser = Auth::id();
    DB::table('comments')->insert([
      'idMeal' => $id,
      'idUser' => $idUser,
      'content' => $request->comment,
      'created_at' => now(),
      'updated_at' => now(),
    ]);

    return redirect()->back();
  }

  /**
   * Remove the specified Meal from storage.
   */
  public function destroy(Meal $meal, $idMeal)
  {
    $meal = Meal::findOrFail($idMeal);
    $meal->delete();

    return redirect()->back()->with('deleted', 'Meal deleted successfully!');
  }
}
