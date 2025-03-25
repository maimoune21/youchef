  <?php

  use App\Http\Controllers\AuthController;
  use App\Http\Controllers\CategoryController;
  use App\Http\Controllers\FavoriteController;
  use App\Http\Controllers\HomeController;
  use App\Http\Controllers\MealController;
  use App\Http\Controllers\ProfileController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;


  // Open Pages :
  Route::get("/", [HomeController::class,"index"]);
  Route::inertia("/aboutUs", "general/AboutUs");
  Route::inertia("/FAQS", "general/FAQS");
  Route::inertia("/privacy", "general/Privacy");
  Route::inertia("/termsOfService", "general/TermsOfService");
  Route::get('/meals', [MealController::class, 'index'])->name('meals');
  Route::get("/mealDetails/{id}", [MealController::class, "show"]);
  Route::get("/publicProfile/{id}", [ProfileController::class, "show"]);
  Route::get('/categories', [CategoryController::class, 'index']);

  // Guest Pages :
  Route::middleware('guest')->group(function () {
      // Register :
      Route::inertia('/register', 'auth/Register')->name('register');
      Route::post('/register', [AuthController::class, "register"])->name('register.post');
      // Login :
      Route::inertia('/login', 'auth/Login')->name('login');
      Route::post('/login', [AuthController::class, 'login'])->name('login.post');
  });

  // User Pages :
  Route::middleware('auth')->group(function () {
      Route::post('/meals/{id}/like', [MealController::class, 'like']);
      Route::post('/meals/{id}/dislike', [MealController::class, 'dislike']);
      Route::post('/meals/{id}/comment', [MealController::class, 'addComment']);
      Route::get('/postMeal', [MealController::class, 'create']);
      Route::post('/postMeal', [MealController::class, 'store']);
      Route::get('/favorites', [FavoriteController::class,'index']);
      Route::post('/favorite', [FavoriteController::class,'store']);
      // Private Profile
      Route::get('/privateProfile', [ProfileController::class,'privateShow']);
      Route::delete('/meals/{idMeal}', [MealController::class, 'destroy'])->name('meals.destroy');
      // Logout :
      Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

  });

  // Admin Pages :
  Route::middleware(['auth', 'admin'])->group(function () {
      Route::get('/dashboard/{location}', function($location){
          return inertia('admin/Dashboard',compact('location'));
      });
  });

  // NotFound Page :
  Route::fallback(function () {
      return Inertia::render('general/NotFound')->toResponse(request())->setStatusCode(404);
  });
