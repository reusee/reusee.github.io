/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _tags = __webpack_require__(1);
	
	var _node = __webpack_require__(2);
	
	function DBMon(databases) {
	  return (0, _tags.div)([(0, _tags.table)({ class: 'table table-striped latest-data' }, [(0, _tags.tbody)([databases.map(function (database) {
	    return (0, _node.e)(DB, database);
	  })])])]);
	};
	
	function DB(database) {
	  return (0, _tags.tr)({}, [(0, _tags.td)({ class: 'dbname' }, database.dbname), (0, _tags.td)({ class: 'query-count' }, [(0, _tags.span)({ class: database.lastSample.countClassName }, database.lastSample.nbQueries)]), database.lastSample.topFiveQueries.map(function (query) {
	    return (0, _node.e)(function (query) {
	      this.name = 'Query';
	      return (0, _tags.td)({ class: 'Query ' + query.elapsedClassName }, [query.formatElapsed, (0, _tags.div)({ class: 'popover left' }, [(0, _tags.div)({ class: 'popover-content' }, query.query), (0, _tags.div)('.arrow')])]);
	    }, query);
	  })]);
	}
	
	var element = document.getElementById('app');
	var node = void 0;
	
	function load() {
	  var _patch = (0, _node.patch)(element, DBMon(ENV.generateData().toArray()), node);
	
	  var _patch2 = _slicedToArray(_patch, 2);
	
	  element = _patch2[0];
	  node = _patch2[1];
	
	  Monitoring.renderRate.ping();
	  setTimeout(load, ENV.timeout);
	};
	
	load();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _node = __webpack_require__(2);
	
	var helpers = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'].reduce(function (helpers, tag) {
	  helpers[tag] = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _node.e.apply(undefined, [tag].concat(args));
	  };
	  return helpers;
	}, {});
	
	module.exports = helpers;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.e = e;
	exports.patch = patch;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Node = function () {
	  function Node() {
	    _classCallCheck(this, Node);
	
	    this.tag = null;
	    this.id = null;
	    this.style = null;
	    this.class = null;
	    this.children = null;
	    this.attributes = null;
	    this.events = null;
	    this.text = null;
	    this.innerHTML = null;
	  }
	
	  _createClass(Node, [{
	    key: 'set_tag',
	    value: function set_tag(tag) {
	      this.tag = tag;
	    }
	  }, {
	    key: 'set_selector',
	    value: function set_selector(selector) {
	      var classes = [];
	      var parts = selector.match(/[.#][A-Za-z][A-Za-z0-9_:-]*/g);
	      for (var i = 0, l = parts.length; i < l; i++) {
	        var part = parts[i];
	        if (part.charAt(0) == '#') {
	          this.id = part.substring(1);
	        } else if (part.charAt(0) == '.') {
	          classes.push(part.substring(1));
	        }
	      }
	      var cls = classes.join(' ');
	      if (cls.length > 0) {
	        this.class = cls;
	      }
	    }
	  }, {
	    key: 'set_properties',
	    value: function set_properties(properties) {
	      for (var key in properties) {
	        if (key == 'id' || key == 'class' || key == 'innerHTML') {
	          // id, class, innerHTML
	          this[key] = properties[key];
	        } else if (key == 'style') {
	          // 样式
	          this.style = properties.style;
	        } else if (/^on/.test(key) && typeof properties[key] === 'function') {
	          // 事件
	          this.events = this.events || {};
	          this.events[key] = properties[key];
	        } else {
	          // 其他属性
	          this.attributes = this.attributes || {};
	          this.attributes[key] = properties[key];
	        }
	      }
	    }
	  }, {
	    key: 'set_children',
	    value: function set_children(children) {
	      this.children = this.children || [];
	      if (Array.isArray(children)) {
	        // flatten
	        for (var i = 0, l = children.length; i < l; i++) {
	          this.set_children(children[i]);
	        }
	      } else if (typeof children === 'string' || typeof children === 'number') {
	        var child = new Node();
	        child.text = children;
	        this.children.push(child);
	      } else {
	        this.children.push(children);
	      }
	    }
	  }, {
	    key: 'toElement',
	    value: function toElement() {
	      var element = void 0;
	      if (this.text !== null) {
	        element = document.createTextNode(this.text);
	      } else {
	        element = document.createElement(this.tag);
	      }
	      if (this.innerHTML !== null) {
	        element.innerHTML = this.innerHTML;
	      }
	      if (this.id !== null) {
	        element.id = this.id;
	      }
	      if (this.style !== null) {
	        for (var key in this.style) {
	          element.style[key] = this.style[key];
	        }
	      }
	      if (this.class !== null) {
	        element.className = this.class;
	      }
	      if (this.children !== null) {
	        for (var i = 0, l = this.children.length; i < l; i++) {
	          element.appendChild(this.children[i].toElement());
	        }
	      }
	      if (this.attributes !== null) {
	        for (var _key in this.attributes) {
	          var value = this.attributes[_key];
	          if (value !== undefined && value !== null) {
	            element.setAttribute(_key, value);
	          }
	        }
	      }
	      if (this.events !== null) {
	        for (var _key2 in this.events) {
	          element_set_listener(element, _key2, this.events[_key2]);
	        }
	      }
	      return element;
	    }
	  }]);
	
	  return Node;
	}();
	
	var element_events = {};
	var element_set_listener = function () {
	  var next_element_serial = 1;
	  return function (element, ev_type, fn) {
	    var serial = element.__element_serial;
	    if (!serial) {
	      serial = next_element_serial;
	      next_element_serial++;
	      element.__element_serial = serial;
	    }
	    var event_set = element_events[serial];
	    if (!event_set) {
	      event_set = {};
	      element_events[serial] = event_set;
	    }
	    if (!(ev_type in event_set)) {
	      element.addEventListener(ev_type.substr(2), function (ev) {
	        return element_events[serial][ev_type](ev);
	      });
	    }
	    event_set[ev_type] = fn;
	  };
	}();
	
	function e() {
	  for (var _len = arguments.length, args = Array(_len), _key3 = 0; _key3 < _len; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  // Thunk
	  if (typeof args[0] === 'function') {
	    var thunk = new Thunk();
	    thunk.func = args[0];
	    thunk.args = args.slice(1);
	    thunk.name = thunk.func.name;
	    return thunk;
	  }
	
	  var node = new Node();
	
	  var arg1 = void 0;
	
	  switch (args.length) {
	    case 1:
	      // 只有一个 tag 参数，例如 e('hr')
	      node.set_tag(args[0]);
	
	      break;
	
	    case 2:
	      // 两个参数，第一个为 tag，第二个可为选择器、子结点、属性等
	      // 例 e('div', '#main .block')
	      // 或 e('div', 'Hello, world')
	      // 或 e('div', [ e('p', 'Hello, world') ])
	      // 或 e('div', { id: 'main' })
	      node.set_tag(args[0]);
	      arg1 = args[1];
	
	      switch (typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) {
	        case 'string':
	          if (arg1[0] == '#' || arg1[0] == '.') {
	            // 选择器
	            node.set_selector(arg1);
	          } else {
	            // 文本结点
	            node.set_children(arg1);
	          }
	          break;
	
	        case 'number':
	          node.set_children(arg1);
	          break;
	
	        case 'object':
	          if (Array.isArray(arg1)) {
	            // 子结点
	            node.set_children(arg1);
	          } else {
	            // 属性
	            node.set_properties(arg1);
	          }
	          break;
	
	        default:
	          throw ['bad argument at index 1 to e()', args];
	          break;
	      }
	
	      break;
	
	    case 3:
	      // 三个参数，第一个为 tag，第二个可为选择器、属性，第三个为子结点
	      // 例 e('div', '#main', [ e('p', 'Hello') ])
	      // 或 e('div', { id: 'main' }, [])
	      node.set_tag(args[0]);
	      node.set_children(args[2]);
	      arg1 = args[1];
	
	      switch (typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) {
	        case 'string':
	          node.set_selector(arg1);
	          break;
	
	        case 'object':
	          node.set_properties(arg1);
	          break;
	
	        default:
	          throw ['bad argument at index 1 to e()', args];
	          break;
	      }
	
	      break;
	
	    case 4:
	      // 四个参数，第一个为 tag，第二个为选择器，第三个为属性，第四个为子结点
	      // 例 e('div', '#main', { class: 'foo' }, [ e('div') ])
	      node.set_tag(args[0]);
	      node.set_selector(args[1]);
	      node.set_properties(args[2]);
	      node.set_children(args[3]);
	
	      break;
	
	    default:
	      throw ['bad arguments to e()', args];
	      break;
	  }
	
	  return node;
	}
	
	// 将 last_element 修改为 node 所对应的结构
	// last_node 是和 last_element 当前结构对应的 Node
	function patch(last_element, node, last_node) {
	  // thunk
	  var last_thunk = void 0;
	  if (last_node && last_node instanceof Thunk) {
	    last_thunk = last_node;
	    last_node = last_thunk.node;
	  }
	  if (node instanceof Thunk) {
	    var thunk = node;
	    // 检查是否能复用 last_thunk 的 node
	    if (last_thunk) {
	      if (thunk.name == last_thunk.name) {
	        // 同名组件，可能可以用
	        // 检查参数
	        var same = true;
	        for (var i = 0, l = thunk.args.length; i < l; i++) {
	          if (thunk.args[i] !== last_thunk.args[i]) {
	            same = false;
	            break;
	          }
	        }
	        if (same) {
	          // 可以复用
	          //console.log('reuse node', thunk.name);
	          thunk.node = last_thunk.node;
	          // 有 node 就可能有 element，也复用之
	          thunk.element = last_thunk.element;
	        }
	      }
	    }
	    // 不管是否能复用，都取 thunk 的 node
	    node = thunk.getNode();
	  }
	
	  // 如果两个 Node 是同一个，没必要修改，直接返回
	  // 如果 thunk 的 node 重用了，会在这里返回
	  if (node === last_node) {
	    return [last_element, node];
	  }
	
	  // 下面是一些没法修改 last_element 的情况，只能新建一个元素
	  if (
	  // 前一个 Node 不存在，没法比较差异
	  !last_node ||
	  // 不同的 tag，因为元素并不能改变 tag，所以只能新建一个
	  node.tag != last_node.tag) {
	    // 创建新的元素
	    var element = node.toElement();
	    // 插入新的，删掉旧的
	    last_element.parentNode.insertBefore(element, last_element);
	    last_element.parentNode.removeChild(last_element);
	    return [element, node];
	  }
	
	  // innerHTML 属性
	  if (node.innerHTML != last_node.innerHTML) {
	    last_element.innerHTML = node.innerHTML;
	  }
	
	  // 文本元素
	  if (node.text != last_node.text) {
	    last_element.nodeValue = node.text;
	  }
	
	  // 元素 id
	  if (node.id != last_node.id) {
	    last_element.id = node.id;
	  }
	
	  // 样式
	  if (node.style && last_node.style) {
	    // 比较共同的样式，有差异就更新
	    for (var key in node.style) {
	      if (node.style[key] != last_node.style[key]) {
	        last_element.style[key] = node.style[key];
	      }
	    }
	    // 删掉在旧 Node 里存在，但不存在于新 Node 里的样式
	    for (var _key4 in last_node.style) {
	      if (!(_key4 in node.style)) {
	        last_element.style[_key4] = null;
	      }
	    }
	  } else if (node.style) {
	    // 只有新 Node 有样式，直接设置
	    for (var _key5 in node.style) {
	      last_element.style[_key5] = node.style[_key5];
	    }
	  } else if (last_node.style) {
	    // 新 Node 没有样式，删掉旧 Node 里有的样式
	    for (var _key6 in last_node.style) {
	      last_element.style[_key6] = null;
	    }
	  }
	
	  // 元素 class
	  if (node.class != last_node.class) {
	    last_element.className = node.class;
	  }
	
	  // 元素属性
	  if (node.attributes && last_node.attributes) {
	    // 和样式的处理方式类似，有不同的就更新
	    for (var _key7 in node.attributes) {
	      if (node.attributes[_key7] != last_node.attributes[_key7]) {
	        var value = node.attributes[_key7];
	        if (value !== undefined && value !== null) {
	          last_element.setAttribute(_key7, value);
	        }
	      }
	    }
	    // 新 Node 没有的属性，就删除
	    for (var _key8 in last_node.attributes) {
	      if (!(_key8 in node.attributes)) {
	        last_element.removeAttribute(_key8);
	      }
	    }
	  } else if (node.attributes) {
	    // 只有新 Node 有属性，直接设置
	    for (var _key9 in node.attributes) {
	      var _value = node.attributes[_key9];
	      if (_value !== undefined && _value !== null) {
	        last_element.setAttribute(_key9, _value);
	      }
	    }
	  } else if (last_node.attributes) {
	    // 新 Node 没有属性，删除旧 Node 里有的
	    for (var _key10 in last_node.attributes) {
	      last_element.removeAttribute(_key10);
	    }
	  }
	
	  // 事件
	  // 事件代理没有实现成在顶级元素统一处理，元素各自 addEventListener 的
	  if (node.events && last_node.events) {
	    for (var _key11 in node.events) {
	      element_set_listener(last_element, _key11, node.events[_key11]);
	    }
	    var serial = last_element.__element_serial;
	    for (var _key12 in element_events[serial]) {
	      if (!(_key12 in node.events)) {
	        element_events[serial][_key12] = false;
	      }
	    }
	  } else if (node.events) {
	    for (var _key13 in node.events) {
	      element_set_listener(last_element, _key13, node.events[_key13]);
	    }
	  } else if (last_node.events) {
	    var _serial = last_element.__element_serial;
	    for (var _key14 in element_events[_serial]) {
	      element_events[_serial][_key14] = false;
	    }
	  }
	
	  // 子元素
	  if (node.children && last_node.children) {
	    // 新旧 Node 的子 Node 的数量可能不一样，先处理共有的数目
	    var common_length = Math.min(node.children.length, last_node.children.length);
	    var child_elements = last_element.childNodes;
	    for (var _i = 0; _i < common_length; _i++) {
	      // 递归调用 patch 函数，传入子元素和子 Node
	      patch(child_elements[_i], node.children[_i], last_node.children[_i]);
	    }
	    // 如果新 Node 的子 Node 比较多，插入
	    for (var _i2 = common_length, _l = node.children.length; _i2 < _l; _i2++) {
	      last_element.appendChild(node.children[_i2].toElement());
	    }
	    // 如果旧 Node 的子 Node 比较多，删除
	    for (var _i3 = common_length, _l2 = last_node.children.length; _i3 < _l2; _i3++) {
	      last_element.removeChild(last_element.childNodes[common_length]);
	    }
	  } else if (node.children) {
	    // 只有新 Node 有子 Node
	    for (var _i4 = 0, _l3 = node.children.length; _i4 < _l3; _i4++) {
	      last_element.appendChild(node.children[_i4].toElement());
	    }
	  } else if (last_node.children) {
	    // 新 Node 没有子 Node，删掉所有子元素
	    while (last_element.firstChild) {
	      last_element.removeChild(last_element.firstChild);
	    }
	  }
	
	  return [last_element, node];
	}
	
	var Thunk = function () {
	  function Thunk() {
	    _classCallCheck(this, Thunk);
	
	    this.func = null;
	    this.args = null;
	    this.node = null;
	    this.element = null;
	    this.name = null;
	  }
	
	  _createClass(Thunk, [{
	    key: 'toElement',
	    value: function toElement() {
	      if (!this.element) {
	        this.element = this.getNode().toElement();
	      }
	      return this.element;
	    }
	  }, {
	    key: 'getNode',
	    value: function getNode() {
	      if (!this.node) {
	        this.node = this.func.apply(this, this.args);
	      }
	      return this.node;
	    }
	  }]);

	  return Thunk;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map