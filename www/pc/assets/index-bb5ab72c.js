import{x as m,C as g,a as u,b as l,d as a,w as r,X as h,k as f,o as y,e as x,t as b,p as w,h as C,Y as v,R as k}from"./index-04e45f01.js";import{f as z}from"./formatDate-75ce7776.js";/* empty css               *//* empty css            *//* empty css                     *//* empty css                 */import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const E={data(){return{data:[],form:{type:1},count:0,page_size:7,page:1}},created(){document.title="帮助中心 - "+this.$config.site_name},mounted(){this.getData()},methods:{formatDate:function(e){return z(e,"yyyy-m-d h:i:s")},onclickTable(e,o,c){return m.push("/help/info?id="+e.id)},getData(){this.form.page=this.page,this.form.limit=this.page_size,this.$http.post("/api/notice/list",this.form).then(e=>{this.loading=!1,e.data.code===0?(this.data=g.decrypt(e.data.data),this.count=e.data.count):this.$message.error(e.data.msg)}).catch(e=>{this.loading=!1,this.$message.error(e.message)})}}},S=e=>(w("data-v-13454aa4"),e=e(),C(),e),T={class:"content"},I=S(()=>l("div",{class:"game-list-header"},[l("span",null,"帮助中心")],-1)),B={class:"game-list-header-data"};function N(e,o,c,R,t,n){const i=v,p=h,d=k,_=f;return y(),u("div",T,[I,l("div",B,[a(p,{data:t.data,onRowClick:n.onclickTable,stripe:"",border:"","show-header":!1,size:"large",style:{width:"100%"}},{default:r(()=>[a(i,{type:"index"}),a(i,{prop:"title",label:"title"}),a(i,{prop:"create_time",label:"create_time",width:"250px"},{default:r(s=>[x(b(n.formatDate(s.row.create_time)),1)]),_:1})]),_:1},8,["data","onRowClick"])]),a(_,{class:"game_list box-card",style:{"text-align":"center"},shadow:"always"},{default:r(()=>[a(d,{align:"center",onCurrentChange:n.getData,background:"",layout:"total, prev, pager, next, jumper","page-size":t.page_size,"onUpdate:pageSize":o[0]||(o[0]=s=>t.page_size=s),"current-page":t.page,"onUpdate:currentPage":o[1]||(o[1]=s=>t.page=s),total:t.count},null,8,["onCurrentChange","page-size","current-page","total"])]),_:1})])}const A=D(E,[["render",N],["__scopeId","data-v-13454aa4"]]);export{A as default};
