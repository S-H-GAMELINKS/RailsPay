import Vue from 'vue';
import { shallowMount } from "@vue/test-utils";
import Header from 'components/layouts/Header';
import Store from 'store/store';

describe('Header', () => {
    it('should render correct contents for .navbar-brand', () => {
      const $store = Store;

      const wrapper = shallowMount(Header, {
        mocks: {
            $store
          }
      });
      
      expect(wrapper).not.toBeNull();
    })
});