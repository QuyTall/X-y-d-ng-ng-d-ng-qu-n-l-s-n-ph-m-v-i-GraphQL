"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var products_service_1 = require("./products.service");
var products_entity_1 = require("./products.entity");
var ProductResolver = /** @class */ (function () {
    function ProductResolver(productService) {
        this.productService = productService;
    }
    ProductResolver.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productService.getProducts()];
            });
        });
    };
    ProductResolver.prototype.getProductById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productService.getProductById(id)];
            });
        });
    };
    ProductResolver.prototype.addProduct = function (name, price, description, categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productService.addProduct(name, price, description, categoryId)];
            });
        });
    };
    ProductResolver.prototype.updateProduct = function (id, name, price, description, categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productService.updateProduct(id, name, price, description, categoryId)];
            });
        });
    };
    ProductResolver.prototype.deleteProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productService.deleteProduct(id)];
            });
        });
    };
    __decorate([
        (0, graphql_1.Query)(function () { return [products_entity_1.Product]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProductResolver.prototype, "getProducts", null);
    __decorate([
        (0, graphql_1.Query)(function () { return products_entity_1.Product; }),
        __param(0, (0, graphql_1.Args)("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ProductResolver.prototype, "getProductById", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return products_entity_1.Product; }),
        __param(0, (0, graphql_1.Args)("name")),
        __param(1, (0, graphql_1.Args)("price")),
        __param(2, (0, graphql_1.Args)("description")),
        __param(3, (0, graphql_1.Args)("categoryId")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, String, Number]),
        __metadata("design:returntype", Promise)
    ], ProductResolver.prototype, "addProduct", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return products_entity_1.Product; }),
        __param(0, (0, graphql_1.Args)("id")),
        __param(1, (0, graphql_1.Args)("name")),
        __param(2, (0, graphql_1.Args)("price")),
        __param(3, (0, graphql_1.Args)("description")),
        __param(4, (0, graphql_1.Args)("categoryId")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, Number, String, Number]),
        __metadata("design:returntype", Promise)
    ], ProductResolver.prototype, "updateProduct", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return Boolean; }),
        __param(0, (0, graphql_1.Args)("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ProductResolver.prototype, "deleteProduct", null);
    ProductResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return products_entity_1.Product; }),
        __metadata("design:paramtypes", [products_service_1.ProductService])
    ], ProductResolver);
    return ProductResolver;
}());
exports.ProductResolver = ProductResolver;
