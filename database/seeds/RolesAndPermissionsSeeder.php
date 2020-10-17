<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::create([
            'name' => \App\UserType::USER_TYPE_ADMIN,
            'guard_name' => 'api'
        ]);
        $role->givePermissionTo(Permission::all());

        $role = Role::create([
            'name' => \App\UserType::USER_TYPE_NORMAL,
            'guard_name' => 'api'
        ]);
        $role->givePermissionTo(Permission::all());
    }
}
