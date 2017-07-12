"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var feedService_1 = require("../../services/feedService");
var router_2 = require("nativescript-angular/router");
var detailsComponent = (function () {
    function detailsComponent(fs, activeRoute, routerextention) {
        var _this = this;
        this.fs = fs;
        this.activeRoute = activeRoute;
        this.routerextention = routerextention;
        this.isLoading = true;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.fs.getDetails(params["passedId"]).subscribe(function (data) {
                _this.detailItems = data['_body']; //Bind data to detailItems object
                _this.isLoading = false;
            }, function (error) {
                console.log("ERROR-> " + error); // Error getting the data
            });
        });
    }
    detailsComponent.prototype.onNavBtnTap = function () {
        this.routerextention.back();
    };
    return detailsComponent;
}());
detailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "details",
        templateUrl: "details.component.html",
    }),
    __metadata("design:paramtypes", [feedService_1.feedService, router_1.ActivatedRoute, router_2.RouterExtensions])
], detailsComponent);
exports.detailsComponent = detailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFDakQsMERBQXlEO0FBQ3pELHNEQUE4RDtBQU85RCxJQUFhLGdCQUFnQjtJQUl6QiwwQkFBMEIsRUFBZSxFQUFVLFdBQTJCLEVBQVMsZUFBaUM7UUFBeEgsaUJBU0M7UUFUeUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUZqSCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDakQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxpQ0FBaUM7Z0JBQ2pFLEtBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQSx5QkFBeUI7WUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FLZ0MseUJBQVcsRUFBdUIsdUJBQWMsRUFBMEIseUJBQWdCO0dBSi9HLGdCQUFnQixDQWlCNUI7QUFqQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZlZWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiZGV0YWlsc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgZGV0YWlsc0NvbXBvbmVudHtcclxuICAgIHB1YmxpYyBkZXRhaWxJdGVtczogYW55O1xyXG4gICAgcHVibGljIGlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBmczogZmVlZFNlcnZpY2UsIHByaXZhdGUgYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLHByaXZhdGUgcm91dGVyZXh0ZW50aW9uIDpSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mcy5nZXREZXRhaWxzKHBhcmFtc1tcInBhc3NlZElkXCJdKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbEl0ZW1zID0gZGF0YVsnX2JvZHknXTsvL0JpbmQgZGF0YSB0byBkZXRhaWxJdGVtcyBvYmplY3RcclxuICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUi0+IFwiICsgZXJyb3IpOy8vIEVycm9yIGdldHRpbmcgdGhlIGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbk5hdkJ0blRhcCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyZXh0ZW50aW9uLmJhY2soKTtcclxuICAgIH1cclxufSJdfQ==