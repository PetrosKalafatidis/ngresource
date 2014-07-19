'use strict';

/* Services */
angular.module('myApp.services', ['ngResource'])
    .factory('User', function ($resource, $http) {
        $http.defaults.headers.common['JsonStub-User-Key']= '1e4a7060-13f1-4827-b6c7-67b533ec5f36';
        $http.defaults.headers.common['JsonStub-Project-Key']= '82711cd3-b1c8-4a40-8372-578f30a19558';

        return  $resource('http://jsonstub.com/resource/:user_id', {}, {
        show: { method: 'GET', params: { user_id: '@id' } },
        update: { method: 'PUT', params: { user_id: '@id' } },
        delete: { method: 'DELETE', params: { user_id: '@id' } },
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
        })
    })

   .value('version', '0.1');

// Demonstrate how to register services
// In this case it is a simple value service.
