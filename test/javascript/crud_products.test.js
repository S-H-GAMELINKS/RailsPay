import { shallowMount } from "@vue/test-utils";
import Index from 'components/product/Index';

describe('CRUD Place', () => {
    it('should render Index', () => {
        const wrapper = shallowMount(Index);
        expect(wrapper).not.toBeNull();
    });

});