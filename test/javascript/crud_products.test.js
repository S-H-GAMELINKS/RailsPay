import { shallowMount } from "@vue/test-utils";
import Index from 'components/product/Index';
import Show from 'components/product/Show';
import Create from 'components/product/Create';
import Edit from 'components/product/Edit';

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

    it('should render Edit', () => {
        const wrapper = shallowMount(Edit);
        expect(wrapper).not.toBeNull();
    });
});