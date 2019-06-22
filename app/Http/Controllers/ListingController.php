<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    public function getListing (Listing $listing) {
        $model = $listing->toArray();
        for ($i = 1; $i <=4; $i++){
            $model['image'.$i] = asset (
                'images/'.$listing->id.'/Image_'.$i.'.jpg'
            );
        }
        return response()->json($model);
    }
}
