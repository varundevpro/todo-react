(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),i=(n(21),n(4)),l=n(13),u=n.n(l);var s=function(e){var t=e.todos,n=e.onTodoClick;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.completed,r=e.id,o=e.text;return a.a.createElement("li",{key:r,className:t?"todo todo--completed":"todo",onClick:function(){return n(r)}},a.a.createElement("span",{className:"todo__content"},o))})))},f=function(){var e=Object(i.c)((function(e){return e.todos})),t=Object(i.c)((function(e){return e.visibilityFilter})),n=Object(i.b)();return a.a.createElement("div",{className:"todo-app"},a.a.createElement("h1",{className:"todo-title"},"Todos"),a.a.createElement(s,{todos:p(e,t),onTodoClick:function(e){return n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"TOGGLE_TODO",id:e}}(e))}}),a.a.createElement(d,{onAddClick:function(e){return n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"ADD_TODO",text:e,id:u.a.v4()}}(e))}}),a.a.createElement(v,{visibilityFilter:t,onFilterClick:function(e){return n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL";return{type:"SET_VISIBILITY_FILTER",filter:e}}(e))}}))},d=function(e){var t,n=e.onAddClick;return a.a.createElement("div",{className:"add-todo"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value&&n(t.value),t.value=""}},a.a.createElement("input",{autoFocus:!0,className:"add-todo__input",ref:function(e){t=e}}),a.a.createElement("button",{className:"add-todo__btn",onClick:function(){t.value&&n(t.value),t.value=""}},a.a.createElement("i",{className:"fa fa-plus"}))))},m=function(e){var t=e.filter,n=e.currentFilter,r=e.children,o=e.onClick;return a.a.createElement("button",{className:"filter__link",onClick:function(e){e.preventDefault(),o(t)},style:{opacity:n===t?.2:1}},r)},v=function(e){var t=e.visibilityFilter,n=e.onFilterClick;return a.a.createElement("div",{className:"filters"},a.a.createElement(m,{filter:"SHOW_ALL",currentFilter:t,onClick:n},a.a.createElement("i",{className:"fa fa-list-ul"})),a.a.createElement(m,{filter:"SHOW_ACTIVE",currentFilter:t,onClick:n},a.a.createElement("i",{className:"fa fa-times"})),a.a.createElement(m,{filter:"SHOW_COMPLETED",currentFilter:t,onClick:n},a.a.createElement("i",{className:"fa fa-check"})))},p=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}));default:return e}},O=n(3),E=n(14),b=n(15);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(b.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id!==t.id?e:y({},e,{completed:!e.completed})}));default:return e}},T=Object(O.b)({todos:k,visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}}}),g=Object(O.c)(T);var w=function(){return a.a.createElement(i.a,{store:g},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.573f32a0.chunk.js.map