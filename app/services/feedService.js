"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var feedService = (function () {
    function feedService(http) {
        this.http = http;
        console.log("FeedService LOADED");
    }
    feedService.prototype.getList = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    };
    feedService.prototype.getDetails = function (id) {
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=" + id);
    };
    return feedService;
}());
feedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], feedService);
exports.feedService = feedService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWVkU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFHckMsSUFBYSxXQUFXO0lBR3BCLHFCQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBR00sZ0NBQVUsR0FBakIsVUFBa0IsRUFBRTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJZ0IsV0FBSTtHQUhwQixXQUFXLENBZ0J2QjtBQWhCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBmZWVkU2VydmljZSB7XHJcbiAgICBwdWJsaWMgaXRlbXM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmVlZFNlcnZpY2UgTE9BREVEXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGV0YWlscyhpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP3VzZXJJZD1cIiArIGlkKTtcclxuICAgIH1cclxuXHJcbn0iXX0=