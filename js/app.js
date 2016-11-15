angular.module('wireframe', [])
    .component('controlGroup', {
        templateUrl: 'templates/control-group.html',
        controller: function() {
            var vm = this;
        }
    })
    .component('tableComponent', {
        templateUrl: 'templates/component-table.html',
        controller: function() {
            var vm = this;
                vm.headText = [
                    'asdf asdasdf',
                    'asdfasdfaasd',
                    'asd fewga sd'
                ];
                vm.tdText = [
                    'asdf asdfasdaasdf asdfsdf',
                    'asdasdfasdf asdfasd afdsf',
                    'asdfasdf asdfas asdfasdff'
                ]
        }
    })
    .component('textareaComponent',{
        bindings: {
            rows: '@'
        },
        templateUrl: 'templates/textarea.html',
        controller: function() {
            var vm = this;
                vm.text = [
                    'asdfasdfasdf',
                    'asdfas',
                    'asdfasdf',
                    'asdfasdfasdf',
                    'asdfasdf',
                    'asdf',
                    'aasdf'
                ].join(' ');
            }
    });