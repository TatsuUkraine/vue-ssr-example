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
}