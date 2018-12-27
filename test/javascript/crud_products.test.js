import { shallowMount } from "@vue/test-utils";
import Index from 'components/product/Index';
import Index from 'components/product/Show';
import Index from 'components/product/Create';

describe('CRUD Place', () => {
    it('should render Index', () => {
        const wrapper = shallowMount(Index);
        expect(wrapper).not.toBeNull();
    });

    it('should render Show', () => {
        const wrapper = shallowMount(Show);
        expect(wrapper).not.toBeNull();
    });

    it('should render Create', () => {
        const wrapper = shallowMount(Create);
        expect(wrapper).not.toBeNull();
    });
});