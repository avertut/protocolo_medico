'use strict';

(function($){

  $(function() {

    var datascource = {
		'id': '1',
      'name': 'Protocolo',
      'title': 'InfluenzaPneumonia', 'className': 'product-dept',
      'children': [
        {'id': '2', 'name': 'AuxilioConduta', 'title': 'AuxilioConduta', 'className': 'middle-level',
          'children': [{'id': '3', 'name': 'Verifica SEPSE', 'className': 'middle-level', 'title': 'Verifica SEPSE','children': [ {'id': '4', 'name': 'S1', 'className': 'middle-level2', 'title': 'S1' }]}],

        },
        {'id': '5', 'name': 'JE1_sepse', 'className': 'pipeline1', 'title': 'S1 Excludente',
          'children': [
            {'id': '6', 'name': 'S2',  'className': 'low-level', 'title': 'Sequencia','children': [ {'id': '7', 'name': 'AuxilioConduta','className': 'sequencia', 'title': 'Encaminha Eixo Verm.' }]},
            {'id': '8', 'name': 'S3',  'className': 'frontend1','title': 'Sequencia',
              'children': [
                {'id': '9', 'name': 'Sequência','className': 'sequencia', 'title': 'Encaminhar Eixo Verm.' }
              ]
            }
          ]

        },
				  {'id': '10', 'name': 'Verificar', 'className': 'rd-dept', 'title': 'idade','children': [ {'id': '11', 'name': 'S3', 'className': 'frontend1', 'title': 'S3' }] }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
	  'depth': 4,
	  'exportButton': true,
      'exportFilename': 'meuteste',
      'draggable': true,	  
      'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
        if($draggedNode.find('.content').text().indexOf('manager') > -1 && $dropZone.find('.content').text().indexOf('engineer') > -1) {
          return false;
        }
        return true;
      },
	  
	  'nodeID': 'id',
	    'createNode': function($node, data) {
        var secondMenuIcon = $('<i>', {
          'class': 'fa fa-info-circle second-menu-icon',
          click: function() {
            $(this).siblings('.second-menu').toggle();
          }
        });
        var secondMenu = '<div class="second-menu"><img class="avatar" src="../img/avatar/' + data.id + '.jpg"></div>';
        $node.append(secondMenuIcon).append(secondMenu);
      }, 

    })
    .children('.orgchart').on('nodedropped.orgchart', function(event) {
      console.log('draggedNode:' + event.draggedNode.children('.title').text()
        + ', dragZone:' + event.dragZone.children('.title').text()
        + ', dropZone:' + event.dropZone.children('.title').text()
      );
    });

  });

})(jQuery);