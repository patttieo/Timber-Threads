import AccountHooks from './hooks/account';
import CartHooks from './hooks/cart';
import CurrencySelectorHooks from './hooks/currency-selector';
import ProductHooks from './hooks/product';
import SearchHooks from './hooks/search';
import CountryHooks from './hooks/country';
import CookieHooks from './hooks/cookie';
import FacetedSearchHooks from './hooks/faceted-search';
import SortByHooks from './hooks/sort-by';

const internals = {};

internals.classes = {
    account: new AccountHooks(),
    cart: new CartHooks(),
    currencySelector: new CurrencySelectorHooks(),
    product: new ProductHooks(),
    search: new SearchHooks(),
    country: new CountryHooks(),
    cookie: new CookieHooks(),
    facetedSearch: new FacetedSearchHooks(),
    sortBy: new SortByHooks(),
};

internals.parseHooks = function(hookName) {
    const hookType = hookName.split('-')[0];

    if (internals.classes[hookType] === undefined) {
        throw new Error(hookType + ' is not a valid hookType');
    }

    return internals.classes[hookType];
};

class Hooks {
    on(hookName, callback) {
        const hook = internals.parseHooks(hookName);

        return hook.on(hookName, callback);
    }

    off(hookName, callback) {
        const hook = internals.parseHooks(hookName);

        return hook.off(hookName, callback);
    }

    emit(hookName) {
        const hook = internals.parseHooks(hookName);

        return hook.emit.apply(hook, arguments);
    }
}

export default new Hooks();
