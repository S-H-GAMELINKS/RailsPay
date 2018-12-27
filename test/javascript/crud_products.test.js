import { shallowMount } from "@vue/test-utils";
import Index from 'components/product/Index';
import Show from 'components/product/Show';
import Create from 'components/product/Create';
import Edit from 'components/product/Edit';

describe('CRUD Products', () => {

    const $store = {
        state: {
            user: {
                id: 1,
                session: true
            }
        }
    }

    it('should render Index', () => {
        const wrapper = shallowMount(Index, {
            mocks: {
                $store
            }
        });
        expect(wrapper).not.toBeNull();
    });

    it('should render Show', () => {
        const $route = {
            path: '/products/1'
        }

        const wrapper = shallowMount(Show, {
            mocks: {
                $route
            }
        });
        expect(wrapper).not.toBeNull();
    });

    it('should render Create', () => {
        const wrapper = shallowMount(Create);
        expect(wrapper).not.toBeNull();
    });

    it('should render Edit', () => {
        const wrapper = shallowMount(Edit);
        expect(wrapper).not.toBeNull();
    });
});