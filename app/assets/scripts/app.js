import mobileMenu from './modules/mobile-menu';
import revealOnScroll from './modules/reveal-on-scroll';
import $ from "jquery";
import stickyHeader from './modules/sticky-header';
import Modal from './modules/modal';

var mobileNav = new mobileMenu();
new revealOnScroll($(".feature-item"), "85%");
new revealOnScroll($(".testimonial"), "60%");
var stickyNav = new stickyHeader();
var modal = new Modal();
