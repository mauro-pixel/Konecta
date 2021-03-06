<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\User::create([
            'name' => 'admin',
            'email' => 'admin@email.com',
            'mobile_number' => '4434545',
            'password' => bcrypt('admin'),
            'is_admin' => 1
        ]);
    }
}
