const markerService = require('./services/markerService');
const departureService = require('./services/departureService');

function exportService(service) {
    Object.keys(service).forEach(funcKey => exports[funcKey] = service[funcKey])
}

exportService(markerService);
exportService(departureService);
