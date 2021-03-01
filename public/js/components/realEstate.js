webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlfor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              ' All '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Miami' },
              ' Miami '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Dallas' },
              ' Dallas '
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlfor: 'city' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              ' All '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              ' Ranch '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Condo' },
              ' Condo '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              ' Apartment '
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlfor: 'city' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              ' 0+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              ' 1+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              ' 2+ BR '
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              ' 3+ BR '
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              ' 4+ BR '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor-space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor-space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlfor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'Elevators', value: 'Elevators', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlfor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'Gym', value: 'Gym', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlfor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlfor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'finished basement'
              ),
              _react2.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' Logo '
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Login'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.looplistings = _this.looplistings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'looplistings',
    value: function looplistings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listings";
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address,
                '.'
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-img' },
                    ' '
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Samara Brooks'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2/16/21'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listings-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement('i', { className: 'far fa-square', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        ' 1000 ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedroom' },
                      _react2.default.createElement('i', { className: 'fas fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        ' ',
                        listing.bedrooms
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'view-btn' },
                  'view listing'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                ' $',
                listing.Price,
                ' '
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement(
                  'i',
                  { className: 'fas fa-map-marker-alt', 'aria-hidden': 'true' },
                  listing.city,
                  ' , ',
                  listing.state,
                  ' '
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            ' 300 results found '
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-list' }),
              _react2.default.createElement('i', { className: 'fas fa-th' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.looplistings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '2284 Ben Hur Drive',
  city: 'New York City',
  state: 'New York',
  rooms: '3',
  Price: 220000,
  floorspace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://media.phillyvoice.com/media/images/The_Sterling-Rooftop_Social_Deck-0.2e16d0ba.fill-735x490.jpg' }, {
  address: '2284 Ben Hur Drive',
  city: 'Miami',
  state: 'Florida',
  rooms: '3',
  Price: 220000,
  floorspace: 2000,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'Apartment',
  image: 'https://bostonpads.com/wp-content/uploads/2017/11/boston-luxury-apartment-waterfront.jpg'

}, {
  address: '1000 division st',
  city: 'Dallas',
  state: 'Texas',
  rooms: '5',
  Price: 500000,
  floorspace: 8000,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'House',
  image: 'data:image/jpeg;base64,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'

}, {
  address: '9898 Highland Rd',
  city: 'Baton Rouge',
  state: 'Louisiana',
  rooms: '3',
  Price: 210000,
  floorspace: 2000,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'Condo',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoE34CY8Pzpawbe5sC2gRI23kFz2KPAcj8A&usqp=CAU'

}, {
  address: '544 Highland Rd',
  city: 'Los Angelos',
  state: 'California',
  rooms: '5',
  Price: 440000,
  floorspace: 4000,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'Condo',
  image: 'https://i.pinimg.com/736x/2f/17/7d/2f177dc19e085f60a8adc738a2cb799b.jpg'

}, {
  address: '4746 Ben Hur Drive',
  city: 'New Orleans',
  state: 'Louisiana',
  rooms: '4',
  Price: 280000,
  floorspace: 3000,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://images.adsttc.com/media/images/500e/e676/28ba/0d0c/c700/0c46/large_jpg/stringio.jpg?1414327740'

}, {
  address: '902 MLK Drive',
  city: 'Atlanta',
  state: 'Georgia',
  rooms: '3',
  Price: 240000,
  floorspace: 2450,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'data:image/jpeg;base64,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'

}];
exports.default = listingsData;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: '0',
      bedrooms: 1,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      gym: false,
      swimming_pool: false,
      finished_basement: false,
      Elevators: false,
      filteredData: _listingsData2.default

    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.Price >= _this3.state.min_price && item.Price <= _this3.state.max_price && item.floorspace >= _this3.min_floor_space && item.floorspace <= _this3.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });
      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);