(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/notice/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/notice/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TinymceEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TinymceEditor */ \"./src/components/TinymceEditor/index.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Edit',\n  components: {\n    TinymceEditor: _components_TinymceEditor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    // 弹窗是否打开\n    visible: Boolean,\n    // 修改回显的数据\n    data: Object\n  },\n  data() {\n    return {\n      // 表单数据\n      form: Object.assign({}, this.data),\n      // 表单验证规则\n      rules: {\n        title: [{\n          required: true,\n          message: '请输入标题',\n          trigger: 'blur'\n        }],\n        type: [{\n          required: true,\n          message: '请选择分类',\n          trigger: 'blur'\n        }]\n        // serial_number: [\n        //   {required: true, message: '请输入项目编号', trigger: 'blur'}\n        // ],\n      },\n\n      // 提交状态\n      loading: false,\n      // 是否是修改\n      isUpdate: false,\n      //上级是否可选\n      disabled: false,\n      //故障树列表\n      faultList: [],\n      //修改禁用时清空文字\n      placeholder: '请选择上级分类',\n      show_keyword: false\n    };\n  },\n  computed: {\n    /**\r\n     * 初始化编辑器\r\n     */\n    initEditor() {\n      return {\n        height: 400,\n        file_picker_callback: this.file_picker_callback,\n        skin_url: this.$store.state.theme.theme === 'dark' ? '/admin/tinymce/skins/ui/oxide-dark' : '/admin/tinymce/skins/ui/oxide',\n        content_css: this.$store.state.theme.theme === 'dark' ? '/admin/tinymce/skins/content/dark/content.css' : '/admin/tinymce/skins/content/default/content.css',\n        images_upload_handler: (blobInfo, success, error) => {\n          let file = blobInfo.blob();\n          // 使用axios上传\n          const formData = new FormData();\n          formData.append('file', file, file.name);\n          this.$http.post('/api/upload/uploadImage', formData).then(res => {\n            if (res.data.code == 0) {\n              success(res.data.data);\n            } else {\n              error(res.data.msg);\n            }\n          }).catch(e => {\n            console.error(e);\n            error(e.message);\n          });\n        }\n      };\n    }\n  },\n  watch: {\n    visible() {\n      if (this.data) {\n        this.form = Object.assign({}, this.data);\n        this.isUpdate = true;\n      } else {\n        this.form = {};\n        this.isUpdate = false;\n      }\n    }\n  },\n  methods: {\n    //获取当前选中节点\n    addSelect(value) {\n      // console.log(value)\n      if (value.level == 2) {\n        this.show_keyword = true;\n      } else {\n        this.show_keyword = false;\n      }\n    },\n    /* 下拉树格式化 */\n    normalizer(d) {\n      return {\n        id: d.id,\n        label: d.name,\n        children: d.children || undefined\n      };\n    },\n    /* 保存编辑 */\n    save() {\n      this.$refs['form'].validate(valid => {\n        if (valid) {\n          this.loading = true;\n          var url = '/api/app/notice/edit';\n          if (this.isUpdate === false) {\n            url = '/api/app/notice/add';\n          }\n          this.$http.post(url, this.form).then(res => {\n            this.loading = false;\n            if (res.data.code === 0) {\n              this.$message.success(res.data.msg);\n              if (!this.isUpdate) {\n                this.form = {};\n              }\n              this.updateVisible(false);\n              this.$emit('done');\n            } else {\n              this.$message.error(res.data.msg);\n            }\n          }).catch(e => {\n            this.loading = false;\n            this.$message.error(e.message);\n          });\n        } else {\n          return false;\n        }\n      });\n    },\n    /* 更新visible */\n    updateVisible(value) {\n      this.$emit('update:visible', value);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/notice/edit.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/notice/edit.vue?vue&type=template&id=600dbb49&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9398a7f0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/notice/edit.vue?vue&type=template&id=600dbb49&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"el-dialog\", {\n    attrs: {\n      title: _vm.isUpdate ? \"修改数据\" : \"添加数据\",\n      visible: _vm.visible,\n      width: \"90%\",\n      top: \"5px\",\n      fullscreen: true,\n      \"close-on-click-modal\": false,\n      \"destroy-on-close\": true,\n      \"lock-scroll\": true\n    },\n    on: {\n      \"update:visible\": _vm.updateVisible\n    }\n  }, [_c(\"el-form\", {\n    ref: \"form\",\n    attrs: {\n      model: _vm.form,\n      rules: _vm.rules,\n      \"label-width\": \"90px\"\n    }\n  }, [_c(\"el-form-item\", {\n    attrs: {\n      label: \"文章标题:\",\n      prop: \"title\"\n    }\n  }, [_c(\"el-input\", {\n    attrs: {\n      maxlength: 20,\n      clearable: \"\"\n    },\n    model: {\n      value: _vm.form.title,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"title\", $$v);\n      },\n      expression: \"form.title\"\n    }\n  })], 1), _c(\"el-form-item\", {\n    attrs: {\n      label: \"文章分类:\",\n      prop: \"type\"\n    }\n  }, [_c(\"el-select\", {\n    staticClass: \"ele-fluid\",\n    attrs: {\n      clearable: \"\"\n    },\n    model: {\n      value: _vm.form.type,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"type\", $$v);\n      },\n      expression: \"form.type\"\n    }\n  }, [_c(\"el-option\", {\n    attrs: {\n      label: \"帮助中心\",\n      value: 1\n    }\n  }), _c(\"el-option\", {\n    attrs: {\n      label: \"关于我们\",\n      value: 2\n    }\n  }), _c(\"el-option\", {\n    attrs: {\n      label: \"找回包赔\",\n      value: 3\n    }\n  })], 1)], 1), _c(\"el-form-item\", {\n    attrs: {\n      label: \"内容:\",\n      prop: \"notice\"\n    }\n  }, [_c(\"tinymce-editor\", {\n    attrs: {\n      init: _vm.initEditor\n    },\n    model: {\n      value: _vm.form.notice,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"notice\", $$v);\n      },\n      expression: \"form.notice\"\n    }\n  })], 1)], 1), _c(\"div\", {\n    attrs: {\n      slot: \"footer\"\n    },\n    slot: \"footer\"\n  }, [_c(\"el-button\", {\n    on: {\n      click: function ($event) {\n        return _vm.updateVisible(false);\n      }\n    }\n  }, [_vm._v(\"取消\")]), _c(\"el-button\", {\n    attrs: {\n      type: \"primary\",\n      loading: _vm.loading\n    },\n    on: {\n      click: _vm.save\n    }\n  }, [_vm._v(\"保存 \")])], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/notice/edit.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%229398a7f0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/app/notice/edit.vue":
/*!***************************************!*\
  !*** ./src/views/app/notice/edit.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _edit_vue_vue_type_template_id_600dbb49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=600dbb49&scoped=true& */ \"./src/views/app/notice/edit.vue?vue&type=template&id=600dbb49&scoped=true&\");\n/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ \"./src/views/app/notice/edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _edit_vue_vue_type_template_id_600dbb49_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _edit_vue_vue_type_template_id_600dbb49_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"600dbb49\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/notice/edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/notice/edit.vue?");

/***/ }),

/***/ "./src/views/app/notice/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/app/notice/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/notice/edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/notice/edit.vue?");

/***/ }),

/***/ "./src/views/app/notice/edit.vue?vue&type=template&id=600dbb49&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/app/notice/edit.vue?vue&type=template&id=600dbb49&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_600dbb49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=600dbb49&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"9398a7f0-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/notice/edit.vue?vue&type=template&id=600dbb49&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_600dbb49_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_600dbb49_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/notice/edit.vue?");

/***/ })

}]);