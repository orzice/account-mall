(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/system/menu/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/menu/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _menu_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-edit */ \"./src/views/system/menu/menu-edit.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SystemMenu',\n  components: {\n    MenuEdit: _menu_edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: {\n    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])(['permission'])\n  },\n  data() {\n    return {\n      // 表格数据接口\n      url: '/api/menu/index',\n      // 表格列配置\n      columns: [{\n        columnKey: 'index',\n        type: 'index',\n        width: 45,\n        align: 'center',\n        showOverflowTooltip: true,\n        fixed: 'left'\n      }, {\n        prop: 'title',\n        label: '菜单名称',\n        showOverflowTooltip: true,\n        minWidth: 200,\n        slot: 'title'\n      }, {\n        prop: 'type',\n        label: '菜单类型',\n        align: 'center',\n        showOverflowTooltip: true,\n        width: 100,\n        slot: 'type'\n      }, {\n        prop: 'path',\n        label: '路由地址',\n        showOverflowTooltip: true,\n        align: 'center',\n        minWidth: 200\n      }, {\n        prop: 'component',\n        label: '组件路径',\n        showOverflowTooltip: true,\n        align: 'center',\n        minWidth: 150\n      }, {\n        prop: 'permission',\n        label: '权限标识',\n        showOverflowTooltip: true,\n        align: 'center',\n        minWidth: 150\n      }, {\n        prop: 'sort',\n        label: '排序',\n        align: 'center',\n        showOverflowTooltip: true,\n        sortable: 'custom',\n        width: 100\n      }, {\n        prop: 'status',\n        label: '状态',\n        align: 'center',\n        showOverflowTooltip: true,\n        width: 100,\n        slot: 'status'\n      }, {\n        prop: 'create_time',\n        label: '创建时间',\n        showOverflowTooltip: true,\n        minWidth: 160,\n        align: 'center',\n        formatter: (row, column, cellValue) => {\n          return this.$util.toDateString(cellValue);\n        }\n      }, {\n        columnKey: 'action',\n        label: '操作',\n        width: 190,\n        align: 'center',\n        resizable: false,\n        slot: 'action'\n      }],\n      // 表格搜索条件\n      where: {},\n      // 表格选中数据\n      selection: [],\n      // 当前编辑数据\n      current: null,\n      // 是否显示编辑弹窗\n      showEdit: false,\n      // 全部菜单数据\n      menuList: []\n    };\n  },\n  methods: {\n    /* 解析接口返回数据 */\n    parseData(res) {\n      res.data = this.$util.toTreeData(res.data, 'id', 'pid');\n      this.menuList = res.data;\n      return res;\n    },\n    /* 刷新表格 */\n    reload() {\n      this.$refs.table.page = 1;\n      this.$refs.table.reload({\n        where: this.where\n      });\n    },\n    /* 重置搜索 */\n    reset() {\n      this.where = {};\n      this.reload();\n    },\n    /* 显示编辑 */\n    openEdit(row, pid) {\n      if (!row) {\n        // 添加\n        this.current = Object.assign({\n          type: 0,\n          hide: 0,\n          pid: pid\n        }, row);\n        this.showEdit = true;\n      } else {\n        // 编辑\n        this.$http.get('/api/menu/info?id=' + row.id).then(res => {\n          if (res.data.code === 0) {\n            // 后台字符串转整数 转义根节点\n            if (res.data.data.pid === \"0\") {\n              res.data.data.pid = 0;\n            }\n            this.current = res.data.data;\n            this.showEdit = true;\n          } else {\n            this.$message.error(res.data.msg);\n          }\n        }).catch(e => {\n          this.$message.error(e.message);\n        });\n      }\n    },\n    /* 删除 */\n    remove(row) {\n      if (row.children && row.children.length > 0) {\n        this.$message.error('请先删除子节点');\n        return;\n      }\n      const loading = this.$loading({\n        lock: true\n      });\n      this.$http.post('/api/menu/delete', {\n        id: row.id\n      }).then(res => {\n        loading.close();\n        if (res.data.code === 0) {\n          this.$message.success(res.data.msg);\n          this.reload();\n        } else {\n          this.$message.error(res.data.msg);\n        }\n      }).catch(e => {\n        loading.close();\n        this.$message.error(e.message);\n      });\n    },\n    /* 展开全部 */\n    expandAll() {\n      this.$refs.table.data.forEach(d => {\n        this.$refs.table.toggleRowExpansion(d, true);\n      });\n    },\n    /* 折叠全部 */\n    foldAll() {\n      this.$refs.table.data.forEach(d => {\n        this.$refs.table.toggleRowExpansion(d, false);\n      });\n    },\n    /* 判断是否是网址 */\n    isUrl(url) {\n      return url && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('://'));\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/system/menu/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/system/menu/index.vue?vue&type=template&id=0304e458&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9398a7f0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/menu/index.vue?vue&type=template&id=0304e458&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"ele-body\"\n  }, [_c(\"el-card\", {\n    attrs: {\n      shadow: \"never\"\n    }\n  }, [_c(\"el-form\", {\n    staticClass: \"ele-form-search\",\n    attrs: {\n      model: _vm.where,\n      \"label-width\": \"77px\"\n    },\n    nativeOn: {\n      keyup: function ($event) {\n        if (!$event.type.indexOf(\"key\") && _vm._k($event.keyCode, \"enter\", 13, $event.key, \"Enter\")) return null;\n        return _vm.reload.apply(null, arguments);\n      },\n      submit: function ($event) {\n        $event.preventDefault();\n      }\n    }\n  }, [_c(\"el-row\", {\n    attrs: {\n      gutter: 15\n    }\n  }, [_c(\"el-col\", {\n    attrs: {\n      lg: 4,\n      md: 12\n    }\n  }, [_c(\"el-input\", {\n    attrs: {\n      clearable: \"\",\n      placeholder: \"请输入菜单名称\"\n    },\n    model: {\n      value: _vm.where.title,\n      callback: function ($$v) {\n        _vm.$set(_vm.where, \"title\", $$v);\n      },\n      expression: \"where.title\"\n    }\n  })], 1), _c(\"el-col\", {\n    attrs: {\n      lg: 6,\n      md: 12\n    }\n  }, [_c(\"div\", {\n    staticClass: \"ele-form-actions\"\n  }, [_c(\"el-button\", {\n    staticClass: \"ele-btn-icon\",\n    attrs: {\n      type: \"primary\",\n      icon: \"el-icon-search\"\n    },\n    on: {\n      click: _vm.reload\n    }\n  }, [_vm._v(\"查询 \")]), _c(\"el-button\", {\n    on: {\n      click: _vm.reset\n    }\n  }, [_vm._v(\"重置\")])], 1)])], 1)], 1), _c(\"ele-pro-table\", {\n    ref: \"table\",\n    attrs: {\n      where: _vm.where,\n      \"row-key\": \"id\",\n      datasource: _vm.url,\n      columns: _vm.columns,\n      \"default-expand-all\": false,\n      \"need-page\": false,\n      \"parse-data\": _vm.parseData,\n      height: \"calc(100vh - 270px)\"\n    },\n    scopedSlots: _vm._u([{\n      key: \"title\",\n      fn: function ({\n        row\n      }) {\n        return [_c(\"i\", {\n          class: row.icon\n        }), _vm._v(\" \" + _vm._s(row.title) + \" \")];\n      }\n    }, {\n      key: \"type\",\n      fn: function ({\n        row\n      }) {\n        return [_vm.isUrl(row.path) ? _c(\"el-tag\", {\n          attrs: {\n            type: \"warning\",\n            size: \"mini\"\n          }\n        }, [_vm._v(\"外链 \")]) : _vm.isUrl(row.component) ? _c(\"el-tag\", {\n          attrs: {\n            type: \"success\",\n            size: \"mini\"\n          }\n        }, [_vm._v(\"内链 \")]) : _c(\"el-tag\", {\n          attrs: {\n            type: [\"primary\", \"info\"][row.type],\n            size: \"mini\"\n          }\n        }, [_vm._v(\" \" + _vm._s([\"菜单\", \"按钮\"][row.type]) + \" \")])];\n      }\n    }, {\n      key: \"status\",\n      fn: function ({\n        row\n      }) {\n        return [_c(\"ele-dot\", {\n          attrs: {\n            type: [\"danger\", \"success\", \"danger\"][row.status],\n            ripple: row.status === 0,\n            text: [\"禁用\", \"正常\", \"禁用\"][row.status]\n          }\n        })];\n      }\n    }, {\n      key: \"action\",\n      fn: function ({\n        row\n      }) {\n        return [_vm.permission.includes(\"sys:menu:addz\") ? _c(\"el-link\", {\n          attrs: {\n            type: \"primary\",\n            underline: false,\n            icon: \"el-icon-plus\"\n          },\n          on: {\n            click: function ($event) {\n              return _vm.openEdit(null, row.id);\n            }\n          }\n        }, [_vm._v(\"添加 \")]) : _vm._e(), _vm.permission.includes(\"sys:menu:edit\") ? _c(\"el-link\", {\n          attrs: {\n            type: \"primary\",\n            underline: false,\n            icon: \"el-icon-edit\"\n          },\n          on: {\n            click: function ($event) {\n              return _vm.openEdit(row);\n            }\n          }\n        }, [_vm._v(\"修改 \")]) : _vm._e(), _c(\"el-popconfirm\", {\n          staticClass: \"ele-action\",\n          attrs: {\n            title: \"确定要删除吗？\"\n          },\n          on: {\n            confirm: function ($event) {\n              return _vm.remove(row);\n            }\n          }\n        }, [_vm.permission.includes(\"sys:menu:delete\") ? _c(\"el-link\", {\n          attrs: {\n            slot: \"reference\",\n            type: \"danger\",\n            underline: false,\n            icon: \"el-icon-delete\"\n          },\n          slot: \"reference\"\n        }, [_vm._v(\"删除 \")]) : _vm._e()], 1)];\n      }\n    }])\n  }, [_c(\"template\", {\n    slot: \"toolbar\"\n  }, [_vm.permission.includes(\"sys:menu:add\") ? _c(\"el-button\", {\n    staticClass: \"ele-btn-icon\",\n    attrs: {\n      size: \"mini\",\n      type: \"primary\",\n      icon: \"el-icon-plus\"\n    },\n    on: {\n      click: function ($event) {\n        return _vm.openEdit(null);\n      }\n    }\n  }, [_vm._v(\"添加 \")]) : _vm._e(), _c(\"el-button\", {\n    staticClass: \"ele-btn-icon\",\n    attrs: {\n      size: \"mini\"\n    },\n    on: {\n      click: _vm.expandAll\n    }\n  }, [_vm._v(\"展开全部 \")]), _c(\"el-button\", {\n    staticClass: \"ele-btn-icon\",\n    attrs: {\n      size: \"mini\"\n    },\n    on: {\n      click: _vm.foldAll\n    }\n  }, [_vm._v(\"折叠全部 \")])], 1)], 2)], 1), _c(\"menu-edit\", {\n    attrs: {\n      data: _vm.current,\n      \"menu-list\": _vm.menuList,\n      visible: _vm.showEdit\n    },\n    on: {\n      \"update:visible\": function ($event) {\n        _vm.showEdit = $event;\n      },\n      done: _vm.reload\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/system/menu/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%229398a7f0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/system/menu/index.vue":
/*!*****************************************!*\
  !*** ./src/views/system/menu/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_0304e458_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0304e458&scoped=true& */ \"./src/views/system/menu/index.vue?vue&type=template&id=0304e458&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/system/menu/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_0304e458_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_0304e458_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0304e458\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/system/menu/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/system/menu/index.vue?");

/***/ }),

/***/ "./src/views/system/menu/index.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/system/menu/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/system/menu/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/system/menu/index.vue?");

/***/ }),

/***/ "./src/views/system/menu/index.vue?vue&type=template&id=0304e458&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/views/system/menu/index.vue?vue&type=template&id=0304e458&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0304e458_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0304e458&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"9398a7f0-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/system/menu/index.vue?vue&type=template&id=0304e458&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0304e458_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0304e458_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/system/menu/index.vue?");

/***/ })

}]);