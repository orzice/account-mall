(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/notice-edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/message/notice/notice-edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TinymceEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TinymceEditor */ \"./src/components/TinymceEditor/index.vue\");\n/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/plugins/media */ \"./node_modules/tinymce/plugins/media/index.js\");\n/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'NoticeEdit',\n  components: {\n    TinymceEditor: _components_TinymceEditor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    // 弹窗是否打开\n    visible: Boolean,\n    // 修改回显的数据\n    data: Object\n  },\n  data() {\n    return {\n      // 表单数据\n      form: Object.assign({\n        status: 1,\n        is_top: 2,\n        source: 1\n      }, this.data),\n      // 表单验证规则\n      rules: {\n        title: [{\n          required: true,\n          message: '请输入通知标题',\n          trigger: 'blur'\n        }],\n        // source: [\n        //   {required: true, message: '请选择通知来源', trigger: 'blur'}\n        // ],\n        status: [{\n          required: true,\n          message: '请选择通知状态',\n          trigger: 'blur'\n        }],\n        is_top: [{\n          required: true,\n          message: '请选择是否置顶',\n          trigger: 'blur'\n        }],\n        content: [{\n          required: true,\n          message: '请输入通知内容',\n          trigger: 'blur'\n        }]\n      },\n      // 提交状态\n      loading: false,\n      // 是否是修改\n      isUpdate: false,\n      resimg: '',\n      //上传img的url\n      resVideo: '/admin/upload/uploadFile',\n      //上传视频的url\n      uploaded: false,\n      //有没有上传完成\n      hasChange: false,\n      hasInit: false,\n      tinymceId: this.id,\n      fullscreen: false,\n      languageTypeList: {\n        'en': 'en',\n        'zh': 'zh_CN',\n        'es': 'es_MX',\n        'ja': 'ja'\n      }\n      //上传的文件列表\n    };\n  },\n\n  watch: {\n    data() {\n      if (this.data) {\n        this.form = Object.assign({\n          status: 1\n        }, this.data);\n        this.isUpdate = true;\n      } else {\n        this.form = {\n          status: 1,\n          is_top: 2\n        };\n        this.isUpdate = false;\n      }\n    }\n  },\n  computed: {\n    // 初始化富文本\n    initEditor() {\n      return {\n        height: 300,\n        branding: false,\n        skin_url: '/admin/tinymce/skins/ui/oxide',\n        content_css: '/admin/tinymce/skins/content/default/content.css',\n        language_url: '/admin/tinymce/langs/zh_CN.js',\n        language: 'zh_CN',\n        plugins: 'code print preview fullscreen paste searchreplace save autosave link autolink image imagetools media table codesample lists advlist hr charmap emoticons anchor directionality pagebreak quickbars nonbreaking visualblocks visualchars wordcount',\n        toolbar: 'fullscreen preview code | undo redo | forecolor backcolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | formatselect fontselect fontsizeselect | link image media emoticons charmap anchor pagebreak codesample | ltr rtl',\n        toolbar_drawer: 'sliding',\n        images_upload_handler: (blobInfo, success, error) => {\n          let file = blobInfo.blob();\n          // 使用axios上传\n          const formData = new FormData();\n          formData.append('file', file, file.name);\n          this.$http.post('/api/upload/uploadImage', formData).then(res => {\n            if (res.data.code == 0) {\n              success(res.data.data);\n            } else {\n              error(res.data.msg);\n            }\n          }).catch(e => {\n            console.error(e);\n            error(e.message);\n          });\n        },\n        file_picker_types: 'media',\n        file_picker_callback: (callback, value, meta) => {\n          // console.log(callback)\n          let that = this;\n          let input = document.createElement('input'); //创建一个隐藏的input\n          input.setAttribute('type', 'file');\n          // let that = this;\n          input.onchange = function (res) {\n            // console.log(res)\n            let file = res.path[0].files[0]; //选取第一个文件\n            // console.log(file)\n            that.uploadImg(file, 'media').then(obj => {\n              // console.log(obj.data.path)\n              callback(obj.data.path);\n            }); // 上传视频拿到url\n            // if (that.uploaded) {\n            //     console.log(11111111)\n            //     // _this.resVideo,\n            //     // console.log(this.resVideo, 'true')\n            //     callback(that.resVideo) //将url显示在弹框输入框中\n            //\n            // } else {\n            //     setTimeout(() => {\n            //         //设置几秒后再去取数据\n            //         // console.log(this.resVideo, 'false')\n            //         callback(this.resVideo)\n            //     }, 5000)\n            // }\n          };\n          //触发点击\n          input.click();\n        }\n      };\n    }\n  },\n  methods: {\n    uploadImg(file, type) {\n      // console.log(token,file,type,)\n      let content = file;\n      let formData = new FormData();\n      formData.append('file', content);\n      return this.axios({\n        method: \"post\",\n        //服务器上传地址\n        // url: \"/admin/upload/uploadFile\",\n        url: \"/admin/uploadFile/video_file\",\n        data: formData,\n        headers: {\n          // 修改请求头\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      });\n    },\n    ClearContent() {\n      // this.$refs.content.$children[0].cache = \"\";\n      this.$refs.form.model.content = \"\";\n    },\n    /* 保存编辑 */\n    save() {\n      this.$refs['form'].validate(valid => {\n        if (valid) {\n          this.loading = true;\n          this.$http.post('/api/notice/edit', this.form).then(res => {\n            this.loading = false;\n            if (res.data.code === 0) {\n              this.$bus.$emit('changeNum'); //更改顶部消息数量\n              this.$message.success(res.data.msg);\n              if (!this.isUpdate) {\n                this.form = {\n                  status: 1,\n                  is_top: 2\n                };\n              }\n              this.updateVisible(false);\n              this.$emit('done');\n            } else {\n              this.$message.error(res.data.msg);\n            }\n          }).catch(e => {\n            this.loading = false;\n            this.$message.error(e.message);\n          });\n        } else {\n          return false;\n        }\n      });\n    },\n    /* 更新visible */\n    updateVisible(value) {\n      this.$emit('update:visible', value);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/message/notice/notice-edit.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/notice-edit.vue?vue&type=template&id=726f47ca&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9398a7f0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/message/notice/notice-edit.vue?vue&type=template&id=726f47ca&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"el-dialog\", {\n    attrs: {\n      title: _vm.isUpdate ? \"修改通知\" : \"添加通知\",\n      visible: _vm.visible,\n      width: \"55%\",\n      \"destroy-on-close\": true,\n      \"lock-scroll\": false,\n      \"close-on-click-modal\": false\n    },\n    on: {\n      close: _vm.ClearContent,\n      \"update:visible\": _vm.updateVisible\n    }\n  }, [_c(\"el-form\", {\n    ref: \"form\",\n    attrs: {\n      model: _vm.form,\n      rules: _vm.rules,\n      \"label-width\": \"82px\"\n    }\n  }, [_c(\"el-form-item\", {\n    attrs: {\n      label: \"通知标题:\",\n      prop: \"title\"\n    }\n  }, [_c(\"el-input\", {\n    attrs: {\n      maxlength: 20,\n      placeholder: \"请输入通知标题\",\n      clearable: \"\"\n    },\n    model: {\n      value: _vm.form.title,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"title\", $$v);\n      },\n      expression: \"form.title\"\n    }\n  })], 1), _c(\"el-row\", {\n    attrs: {\n      gutter: 15\n    }\n  }, [_c(\"el-col\", {\n    attrs: {\n      sm: 12\n    }\n  }), _c(\"el-col\", {\n    attrs: {\n      sm: 12\n    }\n  }, [_c(\"el-form-item\", {\n    attrs: {\n      label: \"通知状态:\",\n      prop: \"status\"\n    }\n  }, [_c(\"el-radio-group\", {\n    model: {\n      value: _vm.form.status,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"status\", $$v);\n      },\n      expression: \"form.status\"\n    }\n  }, [_c(\"el-radio\", {\n    attrs: {\n      label: 1\n    }\n  }, [_vm._v(\"在用\")]), _c(\"el-radio\", {\n    attrs: {\n      label: 2\n    }\n  }, [_vm._v(\"停用\")])], 1)], 1)], 1), _c(\"el-col\", {\n    attrs: {\n      sm: 12\n    }\n  }, [_c(\"el-form-item\", {\n    attrs: {\n      label: \"是否置顶:\",\n      prop: \"is_top\"\n    }\n  }, [_c(\"el-radio-group\", {\n    model: {\n      value: _vm.form.is_top,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"is_top\", $$v);\n      },\n      expression: \"form.is_top\"\n    }\n  }, [_c(\"el-radio\", {\n    attrs: {\n      label: 1\n    }\n  }, [_vm._v(\"置顶\")]), _c(\"el-radio\", {\n    attrs: {\n      label: 2\n    }\n  }, [_vm._v(\"不置顶\")])], 1)], 1)], 1)], 1), _c(\"el-form-item\", {\n    staticStyle: {\n      \"padding-top\": \"20px\"\n    },\n    attrs: {\n      label: \"通知内容:\",\n      prop: \"content\"\n    }\n  }, [_c(\"tinymce-editor\", {\n    attrs: {\n      init: _vm.initEditor\n    },\n    model: {\n      value: _vm.form.content,\n      callback: function ($$v) {\n        _vm.$set(_vm.form, \"content\", $$v);\n      },\n      expression: \"form.content\"\n    }\n  })], 1)], 1), _c(\"div\", {\n    attrs: {\n      slot: \"footer\"\n    },\n    slot: \"footer\"\n  }, [_c(\"el-button\", {\n    on: {\n      click: function ($event) {\n        return _vm.updateVisible(false);\n      }\n    }\n  }, [_vm._v(\"取消\")]), _c(\"el-button\", {\n    attrs: {\n      type: \"primary\",\n      loading: _vm.loading\n    },\n    on: {\n      click: _vm.save\n    }\n  }, [_vm._v(\"保存 \")])], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/message/notice/notice-edit.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%229398a7f0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/message/notice/notice-edit.vue":
/*!**************************************************!*\
  !*** ./src/views/message/notice/notice-edit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notice_edit_vue_vue_type_template_id_726f47ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-edit.vue?vue&type=template&id=726f47ca&scoped=true& */ \"./src/views/message/notice/notice-edit.vue?vue&type=template&id=726f47ca&scoped=true&\");\n/* harmony import */ var _notice_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-edit.vue?vue&type=script&lang=js& */ \"./src/views/message/notice/notice-edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _notice_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _notice_edit_vue_vue_type_template_id_726f47ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _notice_edit_vue_vue_type_template_id_726f47ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"726f47ca\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/message/notice/notice-edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/message/notice/notice-edit.vue?");

/***/ }),

/***/ "./src/views/message/notice/notice-edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/message/notice/notice-edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./notice-edit.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/notice-edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/message/notice/notice-edit.vue?");

/***/ }),

/***/ "./src/views/message/notice/notice-edit.vue?vue&type=template&id=726f47ca&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/message/notice/notice-edit.vue?vue&type=template&id=726f47ca&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_edit_vue_vue_type_template_id_726f47ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9398a7f0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./notice-edit.vue?vue&type=template&id=726f47ca&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"9398a7f0-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/message/notice/notice-edit.vue?vue&type=template&id=726f47ca&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_edit_vue_vue_type_template_id_726f47ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9398a7f0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_edit_vue_vue_type_template_id_726f47ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/message/notice/notice-edit.vue?");

/***/ })

}]);