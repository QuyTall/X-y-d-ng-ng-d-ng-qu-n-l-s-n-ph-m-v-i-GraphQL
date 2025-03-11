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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var categories_service_1 = require("./categories.service");
var categories_entity_1 = require("./categories.entity");
var create_category_input_1 = require("../../../../../src/products/create-category.input");
var category_input_1 = require("./category.input");
var CategoriesResolver = /** @class */ (function () {
    function CategoriesResolver(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesResolver.prototype.categories = function () {
        return this.categoriesService.findAll();
    };
    CategoriesResolver.prototype.category = function (id) {
        return this.categoriesService.findOne(id);
    };
    CategoriesResolver.prototype.createCategory = function (data) {
        return this.categoriesService.create(data);
    };
    CategoriesResolver.prototype.updateCategory = function (id, data) {
        return this.categoriesService.update(id, data);
    };
    CategoriesResolver.prototype.deleteCategory = function (id) {
        return this.categoriesService.remove(id);
    };
    var _a;
    __decorate([
        (0, graphql_1.Query)(function () { return [categories_entity_1.Category]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CategoriesResolver.prototype, "categories", null);
    __decorate([
        (0, graphql_1.Query)(function () { return categories_entity_1.Category; }),
        __param(0, (0, graphql_1.Args)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CategoriesResolver.prototype, "category", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return categories_entity_1.Category; }),
        __param(0, (0, graphql_1.Args)('data')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_category_input_1.CreateCategoryInput !== "undefined" && create_category_input_1.CreateCategoryInput) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], CategoriesResolver.prototype, "createCategory", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return categories_entity_1.Category; }),
        __param(0, (0, graphql_1.Args)('id')),
        __param(1, (0, graphql_1.Args)('data')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, category_input_1.UpdateCategoryInput]),
        __metadata("design:returntype", void 0)
    ], CategoriesResolver.prototype, "updateCategory", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return Boolean; }),
        __param(0, (0, graphql_1.Args)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CategoriesResolver.prototype, "deleteCategory", null);
    CategoriesResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return categories_entity_1.Category; }),
        __metadata("design:paramtypes", [categories_service_1.CategoriesService])
    ], CategoriesResolver);
    return CategoriesResolver;
}());
exports.CategoriesResolver = CategoriesResolver;
