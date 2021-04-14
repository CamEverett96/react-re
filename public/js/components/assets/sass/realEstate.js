webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "../sass/main.scss";

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.state = {
            name: "Joe"
        };

        _this.cities = _this.cities.bind(_this);
        _this.homeTypes = _this.homeTypes.bind(_this);
        _this.bedrooms = _this.bedrooms.bind(_this);
        return _this;
    }

    // What we need right now is that as soon as the Filter component is about to run, right before it renders, we want the componentWillMount() to run the function we just passed down, populateAction(), from the parent component.


    _createClass(Filter, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.populateAction();
        }

        // We will now create small components to populate the FILTER sections City, Home Type, and Bedrooms.
        // Now we will go <select> by <select> in the render() and replace the <option>s, with the exception of the "All" <option>s for the city and homeType <select>s.

    }, {
        key: "cities",
        value: function cities() {
            // We had to put all of this inside of an if statement to check for undefined because of some things getting executed asynchronously.
            if (this.props.globalState.populateFormsData.cities != undefined) {
                // var { populateFormsData } = this.props.globalState;
                // We had to go one level deeper, to cities, and could not do it with populateFormsData.  populateFormsData is an object, but we needed to use an array, cities, so that we could use array methods, like map.
                var cities = this.props.globalState.populateFormsData.cities;


                console.log(cities);
                return cities.map(function (item) {
                    return (
                        // Joe decided to use the item for the key, instead of the index, because we are not repeating the names of the cities.
                        _react2.default.createElement(
                            "option",
                            { key: item, value: item },
                            item
                        )
                    );
                });
            }
        }
    }, {
        key: "homeTypes",
        value: function homeTypes() {
            if (this.props.globalState.populateFormsData.homeTypes != undefined) {
                var homeTypes = this.props.globalState.populateFormsData.homeTypes;


                return homeTypes.map(function (item) {
                    return _react2.default.createElement(
                        "option",
                        { key: item, value: item },
                        item
                    );
                });
            }
        }
    }, {
        key: "bedrooms",
        value: function bedrooms() {
            if (this.props.globalState.populateFormsData.bedrooms != undefined) {
                var bedrooms = this.props.globalState.populateFormsData.bedrooms;


                return bedrooms.map(function (item) {
                    return _react2.default.createElement(
                        "option",
                        { key: item, value: item },
                        item,
                        "+ BR"
                    );
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "filter" },
                _react2.default.createElement(
                    "div",
                    { className: "inside" },
                    _react2.default.createElement(
                        "h4",
                        null,
                        "Filter"
                    ),
                    _react2.default.createElement(
                        "label",
                        { htmlFor: "city" },
                        "City"
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "city", className: "filters city", onChange: this.props.change },
                        _react2.default.createElement(
                            "option",
                            { value: "All" },
                            "All"
                        ),
                        this.cities()
                    ),
                    _react2.default.createElement(
                        "label",
                        { htmlFor: "city" },
                        "Home Type"
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "homeType", className: "filters homeType", onChange: this.props.change },
                        _react2.default.createElement(
                            "option",
                            { value: "All" },
                            "All Homes"
                        ),
                        this.homeTypes()
                    ),
                    _react2.default.createElement(
                        "label",
                        { htmlFor: "city" },
                        "Bedrooms"
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "bedrooms", className: "filters bedrooms", onChange: this.props.change },
                        this.bedrooms()
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters price" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Price"
                        ),
                        _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.change, value: this.props.globalState.min_price }),
                        _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.change, value: this.props.globalState.max_price })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters floor-space" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Floor Space"
                        ),
                        _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.change, value: this.props.globalState.min_floor_space }),
                        _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.change, value: this.props.globalState.max_floor_space })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters extras" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Extras"
                        ),
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Elevator"
                            ),
                            _react2.default.createElement("input", { name: "elevator", value: "elevator", type: "checkbox", onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Swimming Pool"
                            ),
                            _react2.default.createElement("input", { name: "swimming_pool", value: "swimming_pool", type: "checkbox", onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Finished Basement"
                            ),
                            _react2.default.createElement("input", { name: "finished_basement", value: "finished_basement", type: "checkbox", onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Gym"
                            ),
                            _react2.default.createElement("input", { name: "gym", value: "gym", type: "checkbox", onChange: this.props.change })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

// Lifecycle Methods.
// Before a component loads, basically it has a whole bunch of different lifecycle methods.  constructor() is the first one that gets triggered.  Basically as soon as the component gets started.  The next one is componentWillMount().  This one gets triggered right before the rendering, right before you get to see anything on the page.  The next one is render().  Now you get to see the component on the page.  The next one is componentDidMount().  With this, you can run something after everything has loaded on the page.
// There are other lifecycle methods.  One of these is componentWillReceiveProps() that deals with when a component will receive props or any data.  Another one is shouldComponentUpdate() that deals with when the data changes and the component updates, this method is going to run.  Another one is componentWillUpdate() that deals with right before a component updates.  The component basically just updates.  Two others are render() and componentDidUpdate().
// Another lifecycle method is componentWillUnmount.  This deals with right before you remove a component.  That's when this method will basically run.
// Every situation is different, so you can choose the lifecycle method that best fits your needs.


exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "../sass/main.scss";

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            name: "Joe"
        };
        return _this;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "logo" },
                    "Logo"
                ),
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Create Ads"
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "About Us"
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Log In"
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#", className: "register-btn" },
                        "Register"
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

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "../sass/main.scss";

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: "Joe"
        };

        // We are binding this.loopListings to this class so that when we use this, it's basically hey I know what version of this you are talking about.
        _this.loopListings = _this.loopListings.bind(_this);
        // this.viewModal = this.viewModal.bind(this);
        return _this;
    }

    _createClass(Listings, [{
        key: "loopListings",
        value: function loopListings() {
            var _this2 = this;

            // var data = this.props.listingsData;
            // You can also do the above like it is done below by using deconstruction.
            var listingsData = this.props.listingsData;

            // This is in case we put in a crazy number that gives us zero listings.  If this happens, we are basically telling the user that his or her filtering didn't return any results.

            if (listingsData == undefined || listingsData.length == 0) {
                return "Sorry your filter did not match any listing.";
            }

            return listingsData.map(function (listing, index) {
                // This if-else statement will show either a box view or a long view, depending on the globalState.
                // We could have put these two views into separate files, but this project is so short that this does not make much sense.
                // This is the Box View.
                if (_this2.props.globalState.view == "box") {
                    return _react2.default.createElement(
                        "div",
                        { className: "col-md-3", key: index },
                        _react2.default.createElement(
                            "div",
                            { className: "listing" },
                            _react2.default.createElement(
                                "div",
                                { className: "listing-img", style: { background: "url(\"" + listing.image + "\") no-repeat center center" } },
                                _react2.default.createElement(
                                    "span",
                                    { className: "address" },
                                    listing.address
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "details" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "col-md-3" },
                                        _react2.default.createElement("div", { className: "user-img" })
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "col-md-9" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "user-details" },
                                            _react2.default.createElement(
                                                "span",
                                                { className: "user-name" },
                                                "Nina Smith"
                                            ),
                                            _react2.default.createElement(
                                                "span",
                                                { className: "post-date" },
                                                "05/05/2020"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "listing-details" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "floor-space" },
                                                _react2.default.createElement("i", { className: "far fa-square" }),
                                                _react2.default.createElement(
                                                    "span",
                                                    null,
                                                    listing.floorSpace,
                                                    " ft\xB2"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { className: "bedrooms" },
                                                _react2.default.createElement("i", { className: "fas fa-bed" }),
                                                _react2.default.createElement(
                                                    "span",
                                                    null,
                                                    listing.rooms,
                                                    " bedrooms"
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "view-btn", onClick: function onClick() {
                                                    return _this2.props.viewModal(index);
                                                } },
                                            "View Listing"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "bottom-info" },
                                _react2.default.createElement(
                                    "span",
                                    { className: "price" },
                                    "$",
                                    listing.price,
                                    " "
                                ),
                                _react2.default.createElement(
                                    "span",
                                    { className: "location" },
                                    _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                                    " ",
                                    listing.city,
                                    ", ",
                                    listing.state
                                )
                            )
                        )
                    );
                }
                // This is the Long View.
                else {
                        return _react2.default.createElement(
                            "div",
                            { className: "col-md-12 col-lg-6", key: index },
                            _react2.default.createElement(
                                "div",
                                { className: "listing" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "listing-img", style: { background: "url(\"" + listing.image + "\") no-repeat center center" } },
                                    _react2.default.createElement(
                                        "span",
                                        { className: "address" },
                                        listing.address
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "details" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "col-md-4" },
                                            _react2.default.createElement("div", { className: "user-img large" })
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "col-md-8" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "user-details" },
                                                _react2.default.createElement(
                                                    "span",
                                                    { className: "user-name" },
                                                    "Nina Smith"
                                                ),
                                                _react2.default.createElement(
                                                    "span",
                                                    { className: "post-date" },
                                                    "05/05/2020"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { className: "listing-details" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "floor-space" },
                                                    _react2.default.createElement("i", { className: "far fa-square" }),
                                                    _react2.default.createElement(
                                                        "span",
                                                        null,
                                                        listing.floorSpace,
                                                        " ft\xB2"
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "bedrooms" },
                                                    _react2.default.createElement("i", { className: "fas fa-bed" }),
                                                    _react2.default.createElement(
                                                        "span",
                                                        null,
                                                        listing.rooms,
                                                        " bedrooms"
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { className: "view-btn", onClick: function onClick() {
                                                        return _this2.props.viewModal(index);
                                                    } },
                                                "View Listing"
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "bottom-info" },
                                    _react2.default.createElement(
                                        "span",
                                        { className: "price" },
                                        "$",
                                        listing.price,
                                        " "
                                    ),
                                    _react2.default.createElement(
                                        "span",
                                        { className: "location" },
                                        _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                                        " ",
                                        listing.city,
                                        ", ",
                                        listing.state
                                    )
                                )
                            )
                        );
                    }
            });
        }

        // Moved to realEstate.js file.
        // viewModal(listingIndex) {
        //     this.setState({
        //         modalData: listingIndex
        //     }, () => {
        //         console.log(this.state.modalData);
        //     });

        // return (
        //     <div className="modal-box">

        //     </div>
        // );
        // }

    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                "section",
                { id: "listings" },
                _react2.default.createElement(
                    "section",
                    { className: "search-area" },
                    _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.change })
                ),
                _react2.default.createElement(
                    "section",
                    { className: "sortby-area" },
                    _react2.default.createElement(
                        "div",
                        { className: "results" },
                        this.props.globalState.filteredData.length,
                        " results found"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "sort-options" },
                        _react2.default.createElement(
                            "select",
                            { name: "sortby", className: "sortby", onChange: this.props.change },
                            _react2.default.createElement(
                                "option",
                                { value: "price-dsc" },
                                "Lowest Price"
                            ),
                            _react2.default.createElement(
                                "option",
                                { value: "price-asc" },
                                "Highest Price"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "view" },
                            _react2.default.createElement("i", { className: "fas fa-th-list", onClick: function onClick() {
                                    return _this3.props.changeView("long");
                                } }),
                            _react2.default.createElement("i", { className: "fas fa-th", onClick: function onClick() {
                                    return _this3.props.changeView("box");
                                } })
                        )
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { className: "listings-results" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        this.loopListings()
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { id: "pagination" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "ul",
                            { className: "pages" },
                            _react2.default.createElement(
                                "li",
                                null,
                                "Prev"
                            ),
                            _react2.default.createElement(
                                "li",
                                { className: "active" },
                                "1"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "2"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "3"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "4"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "5"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "Next"
                            )
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

        _this.state = {
            name: "Joe"
        };
        return _this;
    }

    _createClass(Modal, [{
        key: "render",
        value: function render() {
            if (this.props.modalSelection == -1) {
                return null;
            }
            return _react2.default.createElement(
                "div",
                { className: "modal-box" },
                _react2.default.createElement(
                    "div",
                    { className: "modal-content" },
                    _react2.default.createElement(
                        "div",
                        { onClick: this.props.closeModal },
                        "X"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        JSON.stringify(this.props.modalData.city)
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        this.props.modalData.price
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        this.props.modalData.rooms
                    )
                )
            );
        }
    }]);

    return Modal;
}(_react.Component);

exports.default = Modal;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [
// Each object will represent a single piece of real estate.
{
    address: "20-34 grand ave",
    city: "Ridgewood",
    state: "NY",
    rooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: ["elevator", "gym"],
    homeType: "Apartment",
    image: '../img/house4.jpg'
}, {
    address: "3 universal st",
    city: "Miami",
    state: "FL",
    rooms: 2,
    price: 104656,
    floorSpace: 1430,
    extras: ["elevator", "gym"],
    homeType: "Condo",
    image: '../img/condo3.jpg'
}, {
    address: "1 president plaza",
    city: "Richmond",
    state: "VA",
    rooms: 1,
    price: 345355,
    floorSpace: 2400,
    extras: ["elevator", "gym"],
    homeType: "Single Home",
    image: "../img/apt2.jpg"
}, {
    address: "889 beemore st",
    city: "Newark",
    state: "NJ",
    rooms: 0,
    price: 80000,
    floorSpace: 1000,
    extras: ["elevator", "gym"],
    homeType: "Studio",
    image: "../img/condo1.jpg"
}, {
    address: "43 hollywood blvd",
    city: "Los Angeles",
    state: "CA",
    rooms: 3,
    price: 603000,
    floorSpace: 3000,
    extras: ["elevator", "gym"],
    homeType: "Condo",
    image: "../img/condo2.jpg"
}, {
    address: "2 main st",
    city: "Bedstuy",
    state: "NY",
    rooms: 2,
    price: 220005,
    floorSpace: 2000,
    extras: ["elevator", "pool"],
    homeType: "Multi Home",
    image: "https://www.thehouseplanshop.com/userfiles/photos/large/15569175745499e3e99364f.jpg"
}, {
    address: "730 gates ave",
    city: "Springfield",
    state: "IN",
    rooms: 1,
    price: 150000,
    floorSpace: 2000,
    extras: ["elevator", "gym"],
    homeType: "Room",
    image: "../img/House2.jpg"
}];

exports.default = listingsData;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(234);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _Modal = __webpack_require__(233);

var _Modal2 = _interopRequireDefault(_Modal);

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../sass/main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the parent component.
var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        // Every child component will get the data from here.  All the data that we want to change, we want to change it from here.  All the data the components will be dependent on, we want it hosted here, in the parent.
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: "Joe",
            // Instead of writing listingsData: listingsData, we can just write listingsData, since we are using ES6.
            listingsData: _listingsData2.default,
            // The default value for the city is All.
            city: "All",
            // The default value for the homeType is All.
            homeType: "All",
            // The default value for the bedrooms is 0.
            bedrooms: "0",
            min_price: 0,
            max_price: 10000000,
            min_floor_space: 0,
            max_floor_space: 50000,
            elevator: false,
            finished_basement: false,
            gym: false,
            swimming_pool: false,
            filteredData: _listingsData2.default,
            // The default value for the populateFormsData is an "" and this will be changed by the populateForms().
            populateFormsData: "",
            sortby: "price-dsc",
            // The default view is box, the other view is long.
            view: "box",
            // We are temporarily changing the view to long.
            // view: "long"
            // This is the part of the state that deals with searches.
            search: "",
            // This is the part of the state that deals with modals.  I set it to -1 by default because no modals will be viewed.  When a modal is to be viewed, this is set to the index of the listing.
            modalSelection: -1,
            modalData: ""
        };

        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        // We're binding changeView to this class so that when we pass it down to a child component, we're still keeping the same reference of this.
        _this.changeView = _this.changeView.bind(_this);
        _this.viewModal = _this.viewModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        return _this;
    }

    // This is going to run a method before the whole component even shows up on the page.  Before this component shows up, we want the listings to be arranged from lowest priced to highest priced.  Before the component even mounts, it will run this.


    _createClass(App, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            // var listingsData = this.listingsData.sort((a, b) => {
            // We don't have to use this.listingsData because the variable listingsData is being imported above.
            // Joe decided to use this.state.listingsData because he was having issues with just listingsData.  I think the issue would have been solved with an if statement checking for undefined.
            // if (listingsData != undefined){
            // var listingsData = listingsData.sort((a, b) => {
            // This is going to sort our listings from lowest price to highest price.
            var listingsData = this.state.listingsData.sort(function (a, b) {
                return a.price - b.price;
            });

            this.setState({
                listingsData: listingsData
            });
            // }
        }

        // This change method gets triggered any time you do a change in any of the input fields.

    }, {
        key: "change",
        value: function change(event) {
            var _this2 = this;

            // Here we say give me the name of whatever it was that we changed.
            var name = event.target.name;
            // Here we say give me the value of whatever it was that we changed.
            // var value = event.target.value;
            // Here you are checking if this target is a checkbox, or not.  If it's a checkbox, then you get the event.target.checked, if not, you get the event.target.value.
            var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

            // Here we are changing the state.  We are setting it to whatever the name of the input field is.  And then, the property inside of it will be the value of it.
            // We want to set up that the filteredData() gets triggered whenever we change the state.  Whenever we are changing the state on any of the FILTER options, after it changes the state, we want it to basically trigger the filteredData().  This is going to change the state again, but it's going to change it for the filteredData property of this.state.
            this.setState(_defineProperty({}, name, value), function () {
                // This is a callback function which means it will be triggered after the state is set.

                // We console.log this so that we can see the state as it changes.
                console.log(_this2.state);

                _this2.filteredData();
            });

            // console.log(event.target.name);
            // console.log(event.target.value);   
        }
    }, {
        key: "changeView",
        value: function changeView(viewName) {
            this.setState({
                // Here we are going to change the view in the globalState by assigning it the viewName that we choose.
                view: viewName
            });
        }
    }, {
        key: "filteredData",
        value: function filteredData() {
            var _this3 = this;

            // We want to pass in an item.  An item means one of the listings.  We have an array of listings and it basically loops through every single one, so each one is basically an item.
            // What newData is doing is it's going through every listing inside of listingsData and it's saying hey does this listing match whatever we put in the return statement.  If it doesn't, the listing doesn't get added to the new array.  If it does, then it gets added to the new array.    
            var newData = this.state.listingsData.filter(function (item) {
                // We want to return a condition.
                //For each item, we want to return it back, if it matches the statement that we are going to put down here.
                // What's happening here is that we are only going to return the listings that have a certain minimum price.  We are going to change the minimum price with the change(), I think, which will change the min_price property in this.state.  As changes occur, we are basically going to trigger the filteredData() to match whatever expressions we put here.
                // return item.price >= this.state.min_price;
                // Now we are going to return the listings that match a certain range of conditions.
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
            });

            // If this.state.city != "All" you are going to take newData and filter it again.
            if (this.state.city != "All") {
                newData = newData.filter(function (item) {
                    // Here we will return the selected city.
                    return item.city == _this3.state.city;
                });
            }

            // If this.state.homeType != "All" you are going to take newData and filter it again.
            if (this.state.homeType != "All") {
                newData = newData.filter(function (item) {
                    // Here we will return the selected home type.
                    return item.homeType == _this3.state.homeType;
                });
            }

            // This is going to sort the listings from lowest price to highest price.
            if (this.state.sortby == "price-dsc") {
                newData = newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }

            // This is going to sort the listings from highest price to lowest price.
            if (this.state.sortby == "price-asc") {
                newData = newData.sort(function (a, b) {
                    return b.price - a.price;
                });
            }

            // We want to create a filter for the search bar data.
            if (this.state.search != "") {
                newData = newData.filter(function (item) {
                    // We are looping through all of the cities and making them lower case automatically.
                    // We have this string, which is our city, of whatever item we're looking at.  All of the listings are items.  We're getting the city from it.  We're making the city lower case.
                    var city = item.city.toLowerCase();
                    // This is the text that we are putting in the search bar.  This goes to the state.  We are getting it again, whatever we search, and putting it into a variable here.
                    // Then here we have the searchText.  This is what we put in the search bar.
                    var searchText = _this3.state.search.toLowerCase();
                    // Here we are searching inside the string city, to see if anything matches, as far as any text that we put in.  If we put m and it matches to something, then it's basically not null.  If it doesn't match anything it just returns null.
                    // Joe didn't mention this, but here we are dealing with regular expressions.  If you put in a string into the params section of the match() string function, it will be turned into a regular expression.
                    // After we put something in the search bar, we create another variable called n.  The match() is a method that goes on the string and searches to see if the search bar text matches anything that is inside of the city string.  If nothing matches, the match() is going to return null.  The moment that the match() matches something, it's going to return an array with all of the matches.
                    var n = city.match(searchText);

                    // Because it returns an array, here we are basically saying, hey if it's not null, then it must be true.  This means hey this actually matched to something.  So now we filter in the data like that.
                    if (n != null) {
                        return true;
                    }
                });
            }

            // The following four if statements deal with the filtering of the extras.
            if (this.state.elevator == true) {
                newData = newData.filter(function (item) {
                    return item.extras.indexOf("elevator") != -1;
                });
            }

            if (this.state.finished_basement == true) {
                newData = newData.filter(function (item) {
                    return item.extras.indexOf("finished_basement") != -1;
                });
            }

            if (this.state.gym == true) {
                newData = newData.filter(function (item) {
                    return item.extras.indexOf("gym") != -1;
                });
            }

            if (this.state.swimming_pool == true) {
                newData = newData.filter(function (item) {
                    return item.extras.indexOf("pool") != -1;
                });
            }

            // Here we are changing the filteredData property of this.state by changing it to the newData.
            this.setState({
                filteredData: newData
            });
        }

        // To make this app more dynamic, we are going to fill in the city, homeType, and bedrooms data in the FILTER section with the appropriate data that's available from the listingsData.js file.  Extra things that are not available in the listingsData.js file will not be used.
        // With populateForms() we are going to take the data in listingsData and basically change it.

    }, {
        key: "populateForms",
        value: function populateForms() {
            var _this4 = this;

            // city
            // We are going to go up and basically get all of the listings.
            // We are going to have an array of cities in the cities var.
            var cities = this.state.listingsData.map(function (item) {
                return item.city;
            });
            // The next thing we want to do is to create a set.
            // Here we are creating a new set and passing in the cities array to it.
            // What this is going to do is that it's going to remove the repeats in the array, it will only keep the unique values.
            cities = new Set(cities);
            // We want to make cities into an array, because it is currently an object since that is what the Set() creates.  We do this by putting cities inside of an array with a spread operator.
            cities = [].concat(_toConsumableArray(cities));
            // The sort() is going to sort the cities from A to Z.
            cities = cities.sort();

            // homeType
            var homeTypes = this.state.listingsData.map(function (item) {
                return item.homeType;
            });
            homeTypes = new Set(homeTypes);
            homeTypes = [].concat(_toConsumableArray(homeTypes));
            homeTypes = homeTypes.sort();

            // bedrooms
            var bedrooms = this.state.listingsData.map(function (item) {
                return item.rooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms));
            bedrooms = bedrooms.sort();

            // Now we have to pass all of this information to the state.
            this.setState({
                populateFormsData: {
                    homeTypes: homeTypes,
                    bedrooms: bedrooms,
                    cities: cities
                }
            }, function () {
                // Right after the object we are doing this console.log for testing purposes, to see what is happening.
                console.log(_this4.state);
            });
        }

        // This is the method that opens a modal for a particular listing.

    }, {
        key: "viewModal",
        value: function viewModal(listingIndex) {
            this.setState({
                modalSelection: listingIndex
            });
        }

        // This is the method that closes the modal.

    }, {
        key: "closeModal",
        value: function closeModal() {
            this.setState({
                modalSelection: -1
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    "section",
                    { id: "content-area" },
                    _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                    _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView, viewModal: this.viewModal }),
                    _react2.default.createElement(_Modal2.default, { modalSelection: this.state.modalSelection, modalData: this.state.filteredData[this.state.modalSelection], closeModal: this.closeModal })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

module.hot.accept();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(237)(module)))

/***/ })

},[240]);