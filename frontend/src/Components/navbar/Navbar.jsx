import React, { Component } from 'react';
import './Navbar.css';
import shopping_cart from '../assets/Cart.svg';
import account_logo from '../assets/signin.svg';
import favorite_list from '../assets/favorite.svg';

class Navbar extends Component {
    state = { 
        searchQuery: ''
    } 

    handleInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handleSearch = () => {
        // You can replace the alert with the actual search logic
        alert(`Searching for: ${this.state.searchQuery}`);
    }

    render() { 
        return (
        <nav className='navbar'>
            <div className="navContainer">
                <ul className='navlist-left'>
                    <li className="navlist-items">
                        <a href="#"><img src={account_logo} alt=""/>Sign in</a>
                    </li>
                    <li className="navlist-items"><a href="#">Customer Care</a></li>
                    <li className="navlist-items"><a href="#">Contact Us</a></li>
                </ul>
                <div className="logo"><h1>SHOPPING CART</h1></div>
                <ul className="navlist-right">
                    <li className='searchbar'>
                        <input 
                            type="search" 
                            placeholder='search here' 
                            value={this.state.searchQuery}
                            onChange={this.handleInputChange}
                        />
                        <button className='searchbtn' onClick={this.handleSearch}>Search</button>
                    </li>
                    <li className='navlist-items'><a href="#"><img src={favorite_list} alt="liked" /></a></li>
                    <li className='navlist-items'><a href="#"><img src={shopping_cart} alt="cart" /></a></li>
                </ul>
            </div>
            <div className='navContainer-Bottom'>
                <ul className='navlist-bottom'>
                    <li className="navlist-items">MEN
                        <ul className='dropdownContainer'>
                            <li className='dropItems'><a href="#">Clothing</a></li>
                            <li className='dropItems'><a href="#">Footwear</a></li>
                            <li className='dropItems'><a href="#">Watches</a></li>
                            <li className='dropItems'><a href="#">Sunglasses</a></li>
                        </ul>
                    </li>
                    <li className="navlist-items">WOMEN
                        <ul className='dropdownContainer'>
                            <li className='dropItems'><a href="#">Clothing</a></li>
                            <li className='dropItems'><a href="#">Footwear</a></li>
                            <li className='dropItems'><a href="#">Watches</a></li>
                            <li className='dropItems'><a href="#">Sunglasses</a></li>
                        </ul>
                    </li>
                    <li className="navlist-items">KIDS
                        <ul className='dropdownContainer'>
                            <li className='dropItems'><a href="#">Clothing</a></li>
                            <li className='dropItems'><a href="#">Footwear</a></li>
                            <li className='dropItems'><a href="#">Watches</a></li>
                            <li className='dropItems'><a href="#">Sunglasses</a></li>
                        </ul>
                    </li>
                    <li className="navlist-items">BEAUTY
                        <ul className='dropdownContainer'>
                            <li className='dropItems'><a href="#">Clothing</a></li>
                            <li className='dropItems'><a href="#">Footwear</a></li>
                            <li className='dropItems'><a href="#">Watches</a></li>
                            <li className='dropItems'><a href="#">Sunglasses</a></li>
                        </ul>
                    </li>
                    <li className="navlist-items">HOME&KITCHEN
                        <ul className='dropdownContainer'>
                            <li className='dropItems'><a href="#">Clothing</a></li>
                            <li className='dropItems'><a href="#">Footwear</a></li>
                            <li className='dropItems'><a href="#">Watches</a></li>
                            <li className='dropItems'><a href="#">Sunglasses</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default Navbar;
