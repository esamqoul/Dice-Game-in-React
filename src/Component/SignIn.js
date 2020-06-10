import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import { Formcontainer, Button } from "./Style";
function SignIn() {
  //var counter;
  $(document).ready(function () {
    var erroEle = $(".error-message"),
      focusInput = $(".questions").find(".active");

    if (focusInput.val() !== "") {
      $("#next-page").css("opacity", 1);
    }

    $(document).keypress(function (event) {
      if (event.which === 13) {
        nextMaster("keypress");
        event.preventDefault();
      }
      $("#next-page").click(function () {
        var focusInput = $(".questions").find(".active");
        nextMaster("nextpage");
      });
    });

    function nextMaster(type) {
      var focusInput = $(".questions").find(".active");

      if (focusInput.val() !== "") {
        if (
          (focusInput.attr("name") === "name" ||
            focusInput.attr("name") === "username") &&
          focusInput.val().length < 2
        ) {
          errorMessage(
            erroEle,
            "isn't your " + focusInput.attr("name") + " bit small. ",
            "visible",
            1
          );
        } else {
          if (type !== "navi") showLi(focusInput);
          $("#next-page").css("opacity", 0);
          errorMessage(erroEle, "", "hidden", 0);
        }
      } else if (type === "keypress") {
        errorMessage(
          erroEle,
          "please enter your " + focusInput.attr("name"),
          "visible",
          1
        );
      }
    }

    $("input[type='text']").keyup(function (event) {
      var focusInput = $(this);

      if (focusInput.val().length > 1) {
        if (focusInput.attr("name") === "email" && focusInput.attr("name")) {
          $("#next-page").css("opacity", 0);
        } else {
          $("#next-page").css("opacity", 1);
        }
      } else {
        $("#next-page").css("opacity", 0);
      }
    });
    $("#password").keyup(function (event) {
      var focusInput = $(this);
      $("#viewpswd").val(focusInput.val());

      if (focusInput.val().length > 1) {
        $("#next-page").css("opacity", 1);
      }
    });
    $("#signup").click(function () {
      $(".navigation").fadeOut(400).css({
        display: "none",
      });
      $("#sign-form").fadeOut(400).css({
        display: "none",
      });
      $(this).fadeOut(400).css({
        display: "none",
      });
      $("#wf")
        .animate(
          {
            opacity: 1,
            marginTop: "1em",
          },
          500
        )
        .css({
          display: "block",
        });
    });
  });

  function showLi(focusInput) {
    focusInput.closest("li").animate(
      {
        marginTop: "-150px",
        opacity: 0,
      },
      200
    );
    console.log(focusInput.closest("li"));

    if (focusInput.attr("id") === "viewpswd") {
      $("[data-ref='" + focusInput.attr("id") + "']")
        .addClass("done")
        .html("password"); //                    .html(Array(focusInput.val().length+1).join("*"));
    } else {
      $("[data-ref='" + focusInput.attr("id") + "']")
        .addClass("done")
        .html(focusInput.val());
    }

    focusInput.removeClass("active");
    //counter++;
    var nextli = focusInput.closest("li").next("li");
    nextli.animate(
      {
        marginTop: "0px",
        opacity: 1,
      },
      200
    );
    nextli.find("input").focus().addClass("active");
  }

  function errorMessage(textmeg, appendString, visib, opaci) {
    textmeg
      .css({
        visibility: visib,
      })
      .animate({
        opacity: opaci,
      })
      .html(appendString);
  }
  return (
    <Formcontainer>
      <div className="navigation">
        <ol>
          <li>
            <span href="#" data-ref="name">
              Name
            </span>
          </li>
          <li>
            <span href="#" data-ref="uname">
              Username
            </span>
          </li>
        </ol>
      </div>
      <form id="sign-form" className="sign-form">
        <ol className="questions">
          <li>
            <span>
              <label htmlFor="name">Hi, What is your Username Name?</label>
            </span>
            <input
              className="active"
              id="name"
              name="name"
              type="text"
              placeholder=""
              autoFocus
            />
          </li>
          <li>
            <span>
              <label htmlFor="password">What is your password</label>
            </span>
            <input id="viewpswd" name="password" type="text" placeholder="" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder=""
              autoFocus
            />
          </li>

          <li>
            <Link to="./start">
              <Button id="signup">sign up</Button>
            </Link>
          </li>
        </ol>
        <div id="next-page" alt="Kiwi standing on oval"></div>
      </form>
    </Formcontainer>
  );
}
export default SignIn;
