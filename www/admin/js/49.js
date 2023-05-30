(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/config/web/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/config/web/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_uploadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/uploadImage */ \"./src/components/uploadImage.vue\");\n/* harmony import */ var _components_TinymceEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TinymceEditor */ \"./src/components/TinymceEditor/index.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ConfigWeb\",\n  components: {\n    uploadImage: _components_uploadImage__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    TinymceEditor: _components_TinymceEditor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      active: 'tab_0',\n      // tab页选中\n      loading: false,\n      // 保存按钮loading\n      form: {},\n      // 表单数据\n      configList: []\n    };\n  },\n  computed: {\n    /**\r\n     * 初始化编辑器\r\n     */\n    initEditor() {\n      return {\n        height: 400,\n        file_picker_callback: this.file_picker_callback,\n        skin_url: this.$store.state.theme.theme === 'dark' ? '/tinymce/skins/ui/oxide-dark' : '/tinymce/skins/ui/oxide',\n        content_css: this.$store.state.theme.theme === 'dark' ? '/tinymce/skins/content/dark/content.css' : '/tinymce/skins/content/default/content.css',\n        images_upload_handler: (blobInfo, success, error) => {\n          let file = blobInfo.blob();\n          // 使用axios上传\n          const formData = new FormData();\n          formData.append('file', file, file.name);\n          this.$http.post('/api/upload/uploadImage', formData).then(res => {\n            if (res.data.code == 0) {\n              success(res.data.data);\n            } else {\n              error(res.data.msg);\n            }\n          }).catch(e => {\n            console.error(e);\n            error(e.message);\n          });\n        }\n      };\n    }\n  },\n  mounted() {\n    this.getConfigInfo();\n  },\n  methods: {\n    // 获取配置信息\n    getConfigInfo() {\n      this.$http.get('/api/config/index').then(res => {\n        if (res.data.code === 0) {\n          this.configList = res.data.data;\n          if (this.configList.length > 0) {\n            let itemList = this.configList[0]['item_list'];\n            let itemArr = {};\n            itemList.forEach(item => {\n              itemArr[item.code] = item.value;\n            });\n            this.form = itemArr;\n          } else {\n            this.form = {};\n          }\n        }\n      }).catch(e => {\n        this.$message.error(e.message);\n      });\n    },\n    /* 保存更改 */\n    save() {\n      this.loading = true;\n      this.$http.post('/api/config/edit', this.form).then(res => {\n        this.loading = false;\n        if (res.data.code === 0) {\n          this.$message.success(res.data.msg);\n        } else {\n          this.$message.error(res.data.msg);\n        }\n      }).catch(e => {\n        this.loading = false;\n        this.$message.error(e.message);\n      });\n    },\n    /**\r\n     * Tab点击事件\r\n     * @param tab\r\n     * @param event\r\n     */\n    handleClick(tab, event) {\n      let itemList = this.configList[tab.index]['item_list'];\n      let itemArr = {};\n      itemList.forEach(item => {\n        itemArr[item.code] = item.value;\n      });\n      this.form = itemArr;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/config/web/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/config/web/index.vue?vue&type=template&id=168da238&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9398a7f0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/config/web/index.vue?vue&type=template&id=168da238& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"ele-body\"\n  }, [_c(\"el-card\", {\n    attrs: {\n      shadow: \"never\",\n      \"body-style\": \"padding-top: 5px;\"\n    }\n  }, [_c(\"el-tabs\", {\n    on: {\n      \"tab-click\": _vm.handleClick\n    },\n    model: {\n      value: _vm.active,\n      callback: function ($$v) {\n        _vm.active = $$v;\n      },\n      expression: \"active\"\n    }\n  }, _vm._l(_vm.configList, function (item, index) {\n    return _c(\"el-tab-pane\", {\n      key: index,\n      staticStyle: {\n        margin: \"20px auto\"\n      },\n      attrs: {\n        label: item.config_name,\n        name: \"tab_\" + index\n      }\n    }, [_vm._l(item.item_list, function (subItem, val) {\n      return _c(\"el-form\", {\n        key: val,\n        ref: \"form\",\n        refInFor: true,\n        attrs: {\n          model: _vm.form,\n          \"label-width\": \"150px\"\n        }\n      }, [subItem.type == \"text\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-input\", {\n        attrs: {\n          placeholder: \"请输入\" + subItem.title,\n          clearable: \"\"\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"textarea\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-input\", {\n        attrs: {\n          placeholder: \"请输入\" + subItem.title,\n          rows: 3,\n          type: \"textarea\"\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"image\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\"\n        }\n      }, [_c(\"uploadImage\", {\n        attrs: {\n          limit: 1\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"images\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\"\n        }\n      }, [_c(\"uploadImage\", {\n        attrs: {\n          limit: 10\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"date\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-date-picker\", {\n        attrs: {\n          type: \"date\",\n          placeholder: \"请选择\" + subItem.title,\n          size: \"small\",\n          \"value-format\": \"yyyy-MM-dd\",\n          format: \"yyyy-MM-dd\"\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"datetime\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-date-picker\", {\n        attrs: {\n          type: \"datetime\",\n          placeholder: \"请选择\" + subItem.title,\n          size: \"small\",\n          \"value-format\": \"yyyy-MM-dd HH:mm:ss\",\n          format: \"yyyy-MM-dd HH:mm:ss\"\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"radio\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\"\n        }\n      }, [_c(\"el-radio-group\", {\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      }, _vm._l(subItem.param, function (val, key) {\n        return _c(\"el-radio\", {\n          key: val,\n          attrs: {\n            label: key\n          }\n        }, [_vm._v(_vm._s(val))]);\n      }), 1)], 1) : _vm._e(), subItem.type == \"number\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-input-number\", {\n        staticClass: \"ele-fluid ele-text-left\",\n        attrs: {\n          \"controls-position\": \"right\",\n          min: 0,\n          placeholder: \"请输入\" + subItem.title\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"password\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-input\", {\n        attrs: {\n          placeholder: \"请输入\" + subItem.title,\n          \"show-password\": \"\"\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"checkbox\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-checkbox-group\", {\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      }, _vm._l(subItem.param, function (val, key) {\n        return _c(\"el-checkbox\", {\n          key: val,\n          attrs: {\n            label: key\n          }\n        }, [_vm._v(_vm._s(val))]);\n      }), 1)], 1) : _vm._e(), subItem.type == \"select\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\",\n          prop: subItem.code\n        }\n      }, [_c(\"el-select\", {\n        staticClass: \"ele-block\",\n        attrs: {\n          placeholder: \"请选择\" + subItem.title,\n          clearable: \"\"\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      }, _vm._l(subItem.param, function (val, key) {\n        return _c(\"el-option\", {\n          key: key,\n          attrs: {\n            label: val,\n            value: key\n          }\n        });\n      }), 1)], 1) : _vm._e(), subItem.type == \"ueditor\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\"\n        }\n      }, [_c(\"tinymce-editor\", {\n        attrs: {\n          init: _vm.initEditor\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e(), subItem.type == \"icon\" ? _c(\"el-form-item\", {\n        attrs: {\n          label: subItem.title + \":\"\n        }\n      }, [_c(\"ele-icon-picker\", {\n        attrs: {\n          placeholder: \"请选择\" + subItem.title\n        },\n        model: {\n          value: _vm.form[subItem.code],\n          callback: function ($$v) {\n            _vm.$set(_vm.form, subItem.code, $$v);\n          },\n          expression: \"form[subItem.code]\"\n        }\n      })], 1) : _vm._e()], 1);\n    }), _c(\"div\", {\n      staticStyle: {\n        \"margin-left\": \"100px\"\n      }\n    }, [_c(\"el-button\", {\n      attrs: {\n        type: \"primary\",\n        loading: _vm.loading\n      },\n      on: {\n        click: _vm.save\n      }\n    }, [_vm._v(\"保存更改\")])], 1)], 2);\n  }), 1)], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/config/web/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%229398a7f0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/config/web/index.vue":
/*!****************************************!*\
  !*** ./src/views/config/web/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_168da238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=168da238& */ \"./src/views/config/web/index.vue?vue&type=template&id=168da238&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/config/web/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_168da238___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_168da238___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/config/web/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/config/web/index.vue?");

/***/ }),

/***/ "./src/views/config/web/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/views/config/web/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/config/web/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/config/web/index.vue?");

/***/ }),

/***/ "./src/views/config/web/index.vue?vue&type=template&id=168da238&":
/*!***********************************************************************!*\
  !*** ./src/views/config/web/index.vue?vue&type=template&id=168da238& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_168da238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=168da238& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"9398a7f0-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/config/web/index.vue?vue&type=template&id=168da238&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_168da238___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_168da238___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/config/web/index.vue?");

/***/ })

}]);