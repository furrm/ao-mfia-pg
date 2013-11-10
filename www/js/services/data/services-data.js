"use strict";

angular.module('services-data', [])
.factory('subscribedMatters', function($http){
        return{
            'data': [
                {
                    "matterId": "0017242123-0000010123",
                    "clientId": "0017242123",
                    "clientName": "Client1",
                    "matterNumber": "0000010123",
                    "matterName": "Project Alpha",
                    "matterNickName": "Nickname - Project Alpha",
                    "status": "Open"
                },
                {
                    "matterId": "0011767123-0000677123",
                    "clientId": "0011767123",
                    "clientName": "WClient2",
                    "matterNumber": "0000677123",
                    "matterName": "Project Beta",
                    "matterNickName": "Nickname - Project Beta",
                    "status": "OpenInactive"
                },
                {
                    "matterId": "0010023123-0026050123",
                    "clientId": "0010023123",
                    "clientName": "Client3",
                    "matterNumber": "Project Charlie",
                    "matterName": "Project Charlie",
                    "matterNickName": "Nickname - Project Charlie",
                    "status": "Open"
                },
                {
                    "matterId": "0044607123-0000015123",
                    "clientId": "0044607123",
                    "clientName": "Client4",
                    "matterNumber": "0000015123",
                    "matterName": "Project Delta",
                    "matterNickName": "Nickname - Project Delta",
                    "status": "Open"
                },
                {
                    "matterId": "1111111111-2222222222",
                    "clientId": "1111111111",
                    "clientName": "OK Something Bank, N.A",
                    "matterNumber": "2222222222",
                    "matterName": "Project Echo",
                    "matterNickName": "Nickname - Project Echo",
                    "status": "Open"
                },
                {
                    "matterId": "1111111111-2222222222",
                    "clientId": "1111111111",
                    "clientName": "OK Something Bank, N.A",
                    "matterNumber": "2222222222",
                    "matterName": "Project Foxtrot",
                    "matterNickName": "Nickname - Project Foxtrot",
                    "status": "Open"
                },
                {
                    "matterId": "1111111111-2222222222",
                    "clientId": "1111111111",
                    "clientName": "OK Something Bank, N.A",
                    "matterNumber": "2222222222",
                    "matterName": "Project Golf",
                    "matterNickName": "Nickname - Project Golf",
                    "status": "Open"
                },
                {
                    "matterId": "1111111111-2222222222",
                    "clientId": "1111111111",
                    "clientName": "OK Something Bank, N.A",
                    "matterNumber": "2222222222",
                    "matterName": "Project Hotel",
                    "matterNickName": "Nickname - Project Hotel",
                    "status": "Open"
                },
                {
                    "matterId": "1111111111-2222222222",
                    "clientId": "1111111111",
                    "clientName": "OK Something Bank, N.A",
                    "matterNumber": "2222222222",
                    "matterName": "Project India",
                    "matterNickName": "Nickname - Project India",
                    "status": "Open"
                }
            ]
        }



})
;