(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/message/notice/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _notice_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-edit */ \"./src/views/message/notice/notice-edit.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MessageNotice',\n  components: {\n    NoticeEdit: _notice_edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: {\n    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])([\"permission\"])\n  },\n  data() {\n    return {\n      // 表格数据接口\n      url: '/api/notice/index',\n      // 表格列配置\n      columns: [{\n        columnKey: 'selection',\n        type: 'selection',\n        width: 45,\n        align: 'center',\n        fixed: \"left\"\n      },\n      // {\n      //   prop: 'id',\n      //   label: 'ID',\n      //   width: 60,\n      //   align: 'center',\n      //   showOverflowTooltip: true,\n      //   fixed: \"left\"\n      // },\n      {\n        prop: 'title',\n        label: '通知标题',\n        showOverflowTooltip: true,\n        minWidth: 200,\n        align: 'center'\n      }, {\n        prop: 'status',\n        label: '状态',\n        align: 'center',\n        width: 65,\n        resizable: false,\n        slot: 'status'\n      }, {\n        prop: 'is_top',\n        label: '是否置顶',\n        align: 'center',\n        showOverflowTooltip: true,\n        minWidth: 70,\n        slot: 'is_top'\n      }, {\n        prop: 'browse',\n        label: '已读数量',\n        align: 'center',\n        showOverflowTooltip: true,\n        minWidth: 70\n      }, {\n        prop: 'wait',\n        label: '未读数量',\n        align: 'center',\n        showOverflowTooltip: true,\n        minWidth: 70\n      }, {\n        prop: 'create_time',\n        label: '创建时间',\n        sortable: 'custom',\n        showOverflowTooltip: true,\n        minWidth: 140,\n        align: 'center',\n        formatter: (row, column, cellValue) => {\n          return this.$util.toDateString(cellValue);\n        }\n      }, {\n        prop: 'update_time',\n        label: '更新时间',\n        sortable: 'custom',\n        showOverflowTooltip: true,\n        minWidth: 140,\n        align: 'center',\n        formatter: (row, column, cellValue) => {\n          return this.$util.toDateString(cellValue);\n        }\n      }, {\n        columnKey: 'action',\n        label: '操作',\n        width: 150,\n        align: 'center',\n        resizable: false,\n        slot: 'action',\n        fixed: \"right\"\n      }],\n      // 表格搜索条件\n      where: {},\n      // 表格选中数据\n      selection: [],\n      // 当前编辑数据\n      current: null,\n      // 是否显示编辑弹窗\n      showEdit: false\n    };\n  },\n  methods: {\n    /* 刷新表格 */\n    reload() {\n      this.$refs.table.reload({\n        where: this.where\n      });\n    },\n    /* 重置搜索 */\n    reset() {\n      this.where = {};\n      this.reload();\n    },\n    /* 显示编辑 */\n    openEdit(row) {\n      this.current = row;\n      this.showEdit = true;\n    },\n    /* 删除 */\n    remove(row) {\n      const loading = this.$loading({\n        lock: true\n      });\n      this.$http.post('/api/notice/delete', {\n        id: row.id\n      }).then(res => {\n        loading.close();\n        if (res.data.code === 0) {\n          this.$message.success(res.data.msg);\n          this.reload();\n        } else {\n          this.$message.error(res.data.msg);\n        }\n      }).catch(e => {\n        loading.close();\n        this.$message.error(e.message);\n      });\n    },\n    /* 批量删除 */\n    removeBatch() {\n      if (!this.selection.length) {\n        this.$message.error('请至少选择一条数据');\n        return;\n      }\n      this.$confirm('确定要删除选中的通知吗?', '提示', {\n        type: 'warning'\n      }).then(() => {\n        const loading = this.$loading({\n          lock: true\n        });\n        this.$http.post('/api/notice/delete', {\n          id: this.selection.map(d => d.id)\n        }).then(res => {\n          loading.close();\n          if (res.data.code === 0) {\n            this.$message.success(res.data.msg);\n            this.reload();\n          } else {\n            this.$message.error(res.data.msg);\n          }\n        }).catch(e => {\n          loading.close();\n          this.$message.error(e.message);\n        });\n      }).catch(() => {});\n    },\n    /* 更改状态 */\n    editStatus(row) {\n      // const loading = this.$loading({lock: true});\n      let state = row.status;\n      let params = Object.assign({\n        \"id\": row.id,\n        \"status\": row.status\n      });\n      this.$http.post('/api/notice/status', params).then(res => {\n        // loading.close();\n        if (res.data.code === 0) {\n          row.status = state == 1 ? 1 : 2;\n          this.$bus.$emit('changeNum'); //更改顶部数量\n          this.$message({\n            type: 'success',\n            message: res.data.msg\n          });\n        } else {\n          row.status = !row.status ? 1 : 2;\n          this.$message.error(res.data.msg);\n        }\n      }).catch(e => {\n        // loading.close();\n        this.$message.error(e.message);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/message/notice/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/index.vue?vue&type=template&id=59a1cd06&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9398a7f0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/message/notice/index.vue?vue&type=template&id=59a1cd06&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"ele-body\"\n  }, [_c(\"el-card\", {\n    attrs: {\n      shadow: \"never\"\n    }\n  }, [_c(\"el-form\", {\n    staticClass: \"ele-form-search\",\n    attrs: {\n      model: _vm.where,\n      \"label-width\": \"77px\"\n    },\n    nativeOn: {\n      keyup: function ($event) {\n        if (!$event.type.indexOf(\"key\") && _vm._k($event.keyCode, \"enter\", 13, $event.key, \"Enter\")) return null;\n        return _vm.reload.apply(null, arguments);\n      },\n      submit: function ($event) {\n        $event.preventDefault();\n      }\n    }\n  }, [_c(\"el-row\", {\n    attrs: {\n      gutter: 15\n    }\n  }, [_c(\"el-col\", {\n    attrs: {\n      lg: 5,\n      md: 12\n    }\n  }, [_c(\"el-input\", {\n    attrs: {\n      clearable: \"\",\n      placeholder: \"请输入通知标题\"\n    },\n    model: {\n      value: _vm.where.title,\n      callback: function ($$v) {\n        _vm.$set(_vm.where, \"title\", $$v);\n      },\n      expression: \"where.title\"\n    }\n  })], 1), _c(\"el-col\", {\n    attrs: {\n      lg: 3,\n      md: 12\n    }\n  }, [_c(\"el-select\", {\n    staticClass: \"handle-select\",\n    attrs: {\n      clearable: \"\",\n      placeholder: \"请选择状态\"\n    },\n    model: {\n      value: _vm.where.status,\n      callback: function ($$v) {\n        _vm.$set(_vm.where, \"status\", $$v);\n      },\n      expression: \"where.status\"\n    }\n  }, [_c(\"el-option\", {\n    attrs: {\n      label: \"已发布\",\n      value: \"1\"\n    }\n  }), _c(\"el-option\", {\n    attrs: {\n      label: \"待发布\",\n      value: \"2\"\n    }\n  })], 1)], 1), _c(\"el-col\", {\n    attrs: {\n      lg: 3,\n      md: 12\n    }\n  }, [_c(\"el-select\", {\n    staticClass: \"handle-select\",\n    attrs: {\n      clearable: \"\",\n      placeholder: \"请置顶状态\"\n    },\n    model: {\n      value: _vm.where.is_top,\n      callback: function ($$v) {\n        _vm.$set(_vm.where, \"is_top\", $$v);\n      },\n      expression: \"where.is_top\"\n    }\n  }, [_c(\"el-option\", {\n    attrs: {\n      label: \"是\",\n      value: \"1\"\n    }\n  }), _c(\"el-option\", {\n    attrs: {\n      label: \"否\",\n      value: \"2\"\n    }\n  })], 1)], 1), _c(\"el-col\", {\n    attrs: {\n      lg: 4,\n      md: 12\n    }\n  }, [_c(\"div\", {\n    staticClass: \"ele-form-actions\"\n  }, [_c(\"el-button\", {\n    staticClass: \"ele-btn-icon\",\n    attrs: {\n      type: \"primary\",\n      icon: \"el-icon-search\"\n    },\n    on: {\n      click: _vm.reload\n    }\n  }, [_vm._v(\"查询 \")]), _c(\"el-button\", {\n    on: {\n      click: _vm.reset\n    }\n  }, [_vm._v(\"重置\")])], 1)])], 1)], 1), _c(\"ele-pro-table\", {\n    ref: \"table\",\n    attrs: {\n      where: _vm.where,\n      datasource: _vm.url,\n      columns: _vm.columns,\n      selection: _vm.selection,\n      height: \"calc(100vh - 315px)\"\n    },\n    on: {\n      \"update:selection\": function ($event) {\n        _vm.selection = $event;\n      }\n    },\n    scopedSlots: _vm._u([{\n      key: \"action\",\n      fn: function ({\n        row\n      }) {\n        return [_vm.permission.includes(\"sys:notice:edit\") ? _c(\"el-link\", {\n          attrs: {\n            type: \"primary\",\n            underline: false,\n            icon: \"el-icon-edit\"\n          },\n          on: {\n            click: function ($event) {\n              return _vm.openEdit(row);\n            }\n          }\n        }, [_vm._v(\"修改 \")]) : _vm._e(), _c(\"el-popconfirm\", {\n          staticClass: \"ele-action\",\n          attrs: {\n            title: \"确定要删除此通知吗？\"\n          },\n          on: {\n            confirm: function ($event) {\n              return _vm.remove(row);\n            }\n          }\n        }, [_c(\"el-link\", {\n          directives: [{\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.permission.includes(\"sys:notice:delete\"),\n            expression: \"permission.includes('sys:notice:delete')\"\n          }],\n          attrs: {\n            slot: \"reference\",\n            type: \"danger\",\n            underline: false,\n            icon: \"el-icon-delete\"\n          },\n          slot: \"reference\"\n        }, [_vm._v(\"删除 \")])], 1)];\n      }\n    }, {\n      key: \"status\",\n      fn: function ({\n        row\n      }) {\n        return [_c(\"el-switch\", {\n          attrs: {\n            \"active-value\": 1,\n            \"inactive-value\": 2\n          },\n          on: {\n            change: function ($event) {\n              return _vm.editStatus(row);\n            }\n          },\n          model: {\n            value: row.status,\n            callback: function ($$v) {\n              _vm.$set(row, \"status\", $$v);\n            },\n            expression: \"row.status\"\n          }\n        })];\n      }\n    }, {\n      key: \"is_top\",\n      fn: function ({\n        row\n      }) {\n        return [_c(\"ele-dot\", {\n          attrs: {\n            type: [\"success\", \"warning\"][row.is_top - 1],\n            ripple: row.is_top === 0,\n            text: [\"置顶\", \"不置顶\"][row.is_top - 1]\n          }\n        })];\n      }\n    }])\n  }, [_c(\"template\", {\n    slot: \"toolbar\"\n  }, [_vm.permission.includes(\"sys:notice:add\") ? _c(\"el-button\", {\n    staticClass: \"ele-btn-icon\",\n    attrs: {\n      size: \"small\",\n      type: \"primary\",\n      icon: \"el-icon-plus\"\n    },\n    on: {\n      click: function ($event) {\n        return _vm.openEdit(null);\n      }\n    }\n  }, [_vm._v(\"添加 \")]) : _vm._e()], 1)], 2)], 1), _c(\"notice-edit\", {\n    attrs: {\n      data: _vm.current,\n      visible: _vm.showEdit\n    },\n    on: {\n      \"update:visible\": function ($event) {\n        _vm.showEdit = $event;\n      },\n      done: _vm.reload\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/message/notice/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%229398a7f0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/message/notice/index.vue":
/*!********************************************!*\
  !*** ./src/views/message/notice/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_59a1cd06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=59a1cd06&scoped=true& */ \"./src/views/message/notice/index.vue?vue&type=template&id=59a1cd06&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/message/notice/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_59a1cd06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_59a1cd06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"59a1cd06\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/message/notice/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/message/notice/index.vue?");

/***/ }),

/***/ "./src/views/message/notice/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/message/notice/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/message/notice/index.vue?");

/***/ }),

/***/ "./src/views/message/notice/index.vue?vue&type=template&id=59a1cd06&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/views/message/notice/index.vue?vue&type=template&id=59a1cd06&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_59a1cd06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=59a1cd06&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"9398a7f0-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/index.vue?vue&type=template&id=59a1cd06&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_59a1cd06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_59a1cd06_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/message/notice/index.vue?");

/***/ })

}]);