import React from "react";

export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand text-white" href="#">Felipe Fujita</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact Me</a>
                </li>
                </ul>
            </div>
        </nav>
        </>
    )
}