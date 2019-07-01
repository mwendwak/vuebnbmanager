<?php
use App\Models\Listing;

Route::get('/listing/{listing}', 'ListingController@get_listing_web');
