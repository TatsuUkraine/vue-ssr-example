export default class RouteGenerator {
    generateParamsFromFilters (filters: {[key: string]: number[]}): {[key: string]: string} {
        let filterQuery = [];

        for (let filterTag in filters) {
            let filter = filters[filterTag];

            if (filter.length) {
                filterQuery.push(`${filterTag}==${filter.join(',')}`);
            }
        }

        if (!filterQuery.length) {
            return {};
        }

        return {
            filters: filterQuery.join(',')
        };
    }

    generateFiltersFromRequest (query: {[key: string]: string}): {[key: string]: number[]} {
        if (!query.filters) {
            return {};
        }

        let [filter, ids] = query.filters.split('==');

        return {
            [filter]: ids.split(',').map(function (item: string) {
                return parseInt(item);
            })
        }
    }
}