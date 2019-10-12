<?php
/**
 * Created by IntelliJ IDEA.
 * User: xiaoer
 * Date: 2019/10/12
 * Time: 10:48
 */

namespace App\Http\Controllers;


class MenuController extends \Laravel\Lumen\Routing\Controller{
    public function menus(){
        return m('Menu')->menus();
    }
}
