<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(
            [
                [
                    'title' => 'php',
                    'description' => 'php est de la ..'
                ],
                [
                    'title' => 'js',
                    'description' => 'le js est un la',
                ],
                [
                    'title' => 'Laravel',
                    'description' => 'laravel ???'
                ],

            ]
        );
    }
}
