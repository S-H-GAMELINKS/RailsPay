import { shallowMount } from "@vue/test-utils";
import Index from 'components/web/Index';

describe('Test Web', () => {
    it('should render Web/Index', () => {
        const wrapper = shallowMount(Index);
        expect(wrapper).not.toBeNull();
    });
});