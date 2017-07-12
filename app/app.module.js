"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var http_1 = require("nativescript-angular/http"); ///
var app_component_1 = require("./app.component");
var feedService_1 = require("./services/feedService");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var secure_component_1 = require("./components/secure/secure.component");
var details_component_1 = require("./components/details/details.component");
var list_component_1 = require("./components/list/list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            secure_component_1.SecureComponent,
            details_component_1.detailsComponent,
            list_component_1.listComponent
        ],
        providers: [feedService_1.feedService],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2Q0FBaUQ7QUFDakQsa0RBQW1FLENBQUEsR0FBRztBQUN0RSxpREFBK0M7QUFDL0Msc0RBQXFEO0FBRXJELHNFQUFvRTtBQUNwRSwrRUFBNkU7QUFDN0UseUVBQXVFO0FBQ3ZFLDRFQUF3RTtBQUN4RSxtRUFBK0Q7QUEwQi9ELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQXhCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsK0JBQXVCO1lBQ3ZCLDhCQUFnQjtTQUVuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCxzQ0FBaUI7WUFDakIsa0NBQWU7WUFDZixvQ0FBZ0I7WUFDaEIsOEJBQWE7U0FDaEI7UUFDSCxTQUFTLEVBQUMsQ0FBQyx5QkFBVyxDQUFDO1FBQ3JCLE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjsvLy9cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IGZlZWRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZmVlZFNlcnZpY2VcIjtcbiBcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlY3VyZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdXJlL3NlY3VyZS5jb21wb25lbnRcIjtcbmltcG9ydCB7ZGV0YWlsc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHtsaXN0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG4gXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgICAgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgU2VjdXJlQ29tcG9uZW50LFxuICAgICAgICBkZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBsaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgcHJvdmlkZXJzOltmZWVkU2VydmljZV0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19