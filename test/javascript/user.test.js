import { shallowMount } from "@vue/test-utils";
import SignUp from 'components/user/SignUp';

describe('Users pages', () => {
    it('should render User SignUp', () => {
        const wrapper = shallowMount(SignUp);
        expect(wrapper).not.toBeNull();
    });
});