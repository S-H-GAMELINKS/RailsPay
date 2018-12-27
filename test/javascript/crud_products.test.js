import { shallowMount } from "@vue/test-utils";
import Index from 'components/product/Index';
import Index from 'components/product/Show';

describe('CRUD Place', () => {
    it('should render Index', () => {
        const wrapper = shallowMount(Index);
        expect(wrapper).not.toBeNull();
    });

    it('should render Show', () => {
        const wrapper = shallowMount(Show);
        expect(wrapper).not.toBeNull();
    });
});