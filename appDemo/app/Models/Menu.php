<?php
/**
 * Created by IntelliJ IDEA.
 * User: xiaoer
 * Date: 2019/10/12
 * Time: 10:49
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'admin_menu';

    public function menus(){
        $menus = static::where('status',1)->select('id','parentid','name','icon','m','c','a')->get()->toArray();
        $menus = collect($menus)->map(function($item){
            $item['path'] = '/'.$item['m'].'/'.$item['c'].'/'.$item['a'];
            unset($item['m']);
            unset($item['c']);
            unset($item['a']);
            return $item;
        })->toArray();
        $allMenus = list_to_tree($menus);

        return $allMenus;
    }

    public function routes(){
        $menus = static::where('status',1)->select('id','parentid','name','icon','m','c','a')->get()->toArray();
        $menus = collect($menus)->map(function($item){
            $item['path'] = '/'.$item['m'].'/'.$item['c'].'/'.$item['a'];
            unset($item['m']);
            unset($item['c']);
            unset($item['a']);
            return $item;
        })->toArray();
        $allMenus = list_to_tree($menus);

        return $allMenus;
    }
}
