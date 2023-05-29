"use strict";

angular.module("phonecatApp").config([
  "$routeProvider",
  "$locationProvider",
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        template: "<phone-list></phone-list>",
      })
      .when("/:phoneId", {
        template: "<phone-detail></phone-detail>",
      })
      .otherwise("/"); // use as default if paths don't match in the when method

    $locationProvider.hashPrefix(""); // no hash-prefix -> remove the ! added by Angular 1.6.1
  },
]);
