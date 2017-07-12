"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feedService_1 = require("../../services/feedService");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var listComponent = (function () {
    function listComponent(fs, routerextensions) {
        var _this = this;
        this.fs = fs;
        this.routerextensions = routerextensions;
        this.isLoading = true;
        this.fs.getList().subscribe(function (data) {
            _this.myItems = data['_body']; //Bind data to myItems object
            _this.isLoading = false;
        }, function (error) {
            console.log("ERROR-> " + error); // Error getting the data
        });
    }
    listComponent.prototype.ngOnInit = function () {
        if (!ApplicationSettings.getBoolean("authenticated", false)) {
            this.routerextensions.navigate(["/login"], { clearHistory: true });
        }
    };
    listComponent.prototype.onItemTap = function (args) {
        var selected = this.myItems[args.index];
        this.getUserDetails(selected.id);
    };
    listComponent.prototype.getUserDetails = function (clickedId) {
        var queryParams = {
            "passedId": clickedId
        };
        var transition;
        this.routerextensions.navigate(["details"], { queryParams: queryParams, transition: transition });
    };
    return listComponent;
}());
listComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.component.html",
        providers: [feedService_1.feedService]
    }),
    __metadata("design:paramtypes", [feedService_1.feedService, router_1.RouterExtensions])
], listComponent);
exports.listComponent = listComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwREFBeUQ7QUFDekQsc0RBQStEO0FBQy9ELDBEQUE0RDtBQVU1RCxJQUFhLGFBQWE7SUFLdEIsdUJBQW1CLEVBQWUsRUFBUyxnQkFBa0M7UUFBN0UsaUJBT0M7UUFQa0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdwQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDNUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSw2QkFBNkI7WUFDMUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUEseUJBQXlCO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLFNBQVM7UUFDcEIsSUFBSSxXQUFXLEdBQUc7WUFDZCxVQUFVLEVBQUUsU0FBUztTQUN4QixDQUFDO1FBRUYsSUFBSSxVQUE2QixDQUFDO1FBRWxDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsYUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUU3RSxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLGFBQWE7SUFSekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBQyxDQUFDLHlCQUFXLENBQUM7S0FDMUIsQ0FBQztxQ0FReUIseUJBQVcsRUFBMkIseUJBQWdCO0dBTHBFLGFBQWEsQ0FvQ3pCO0FBcENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBmZWVkU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOltmZWVkU2VydmljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgbGlzdENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIG15SXRlbXM6IGFueTtcclxuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmczogZmVlZFNlcnZpY2UsIHB1YmxpYyByb3V0ZXJleHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgdGhpcy5mcy5nZXRMaXN0KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm15SXRlbXMgPSBkYXRhWydfYm9keSddOy8vQmluZCBkYXRhIHRvIG15SXRlbXMgb2JqZWN0XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SLT4gXCIgKyBlcnJvcik7Ly8gRXJyb3IgZ2V0dGluZyB0aGUgZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYoIUFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyZXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMubXlJdGVtc1thcmdzLmluZGV4XTtcclxuICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHNlbGVjdGVkLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyRGV0YWlscyhjbGlja2VkSWQpIHtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFwicGFzc2VkSWRcIjogY2xpY2tlZElkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zaXRpb246IHsgbmFtZTogXCJzbGlkZVwiIH07XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyZXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJkZXRhaWxzXCJdLCB7IHF1ZXJ5UGFyYW1zLCB0cmFuc2l0aW9uIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=