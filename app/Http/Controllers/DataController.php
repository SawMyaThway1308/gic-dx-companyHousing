<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DataController extends Controller
{
    public function __construct() {
        // $this->client = new ButterCMS(BlogController::$apiToken);
      }
    //
    // app/Http/Controllers/DataController.php

    public function index()
    {
        // Fetch data from the database or perform any other backend logic
        $data = [
            'Hello from the backend!',
            'Hello from the backend!',
            'Hello from the backend!',
        ];

        // Return data as JSON response
        return response()->json(["hi" => $data]);
    }

}
