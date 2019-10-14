<?php
/**
 * Created by IntelliJ IDEA.
 * User: xiaoer
 * Date: 2019/10/12
 * Time: 10:53
 */

function m($model)
{
    static $arr = [];
    $model = ucfirst($model);
    $path = "\\App\\Models\\" . $model;
    if (!isset($arr[$path])) {
        $class = new ReflectionClass($path);
        $arr[$path] = $class->newInstance();
    }
    return $arr[$path];
}

function list_to_tree($list, $root = 0, $pk = 'id', $pid = 'parentid', $child = 'children')
{
    // 创建Tree
    $tree = array();
    if (is_array($list)) {
        // 创建基于主键的数组引用
        $refer = array();
        foreach ($list as $key => $data) {
            $refer[$data[$pk]] = &$list[$key];
        }
        foreach ($list as $key => $data) {
            // 判断是否存在parent
            $parentId = 0;
            if (isset($data[$pid])) {
                $parentId = $data[$pid];
            }
            if ((string)$root == $parentId) {
                $tree[] = &$list[$key];
            } else {
                if (isset($refer[$parentId])) {
                    $parent = &$refer[$parentId];
                    $parent[$child][] = &$list[$key];
                }
            }
        }
    }
    return $tree;
}

function list_to_route($list, $root = 0, $pk = 'id', $pid = 'parentid', $child = 'children')
{
    // 创建Tree
    $tree = array();
    if (is_array($list)) {
        // 创建基于主键的数组引用
        $refer = array();
        foreach ($list as $key => $data) {
            $refer[$data[$pk]] = &$list[$key];
        }
        foreach ($list as $key => $data) {
            // 判断是否存在parent
            $parentId = 0;
            if (isset($data[$pid])) {
                $parentId = $data[$pid];
            }
            if ((string)$root == $parentId) {
                $tree[] = &$list[$key];
            } else {
                if (isset($refer[$parentId])) {
                    $parent = &$refer[$parentId];
                    $parent[$child][] = &$list[$key];
                }
            }
        }
    }
    return $tree;
}


function node_tree($arr, $id = 0, $level = 0)
{
    static $array = array();
    foreach ($arr as $v) {
        if ($v['parentid'] == $id) {
            $v['level'] = $level;
            $array[] = $v;
            node_tree($arr, $v['id'], $level + 1);
        }
    }
    return $array;
}
