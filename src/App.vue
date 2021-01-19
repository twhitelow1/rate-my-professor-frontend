<template>
  <div id="app">
    <!-- Header -->
    <section id="header">
      <div class="container">
        <!-- Logo -->
        <h1 id="logo"><a href="index.html">Rate My Professor</a></h1>
        <p>Where the graders get graded.</p>

        <!-- Nav -->
        <nav id="nav">
          <ul>
            <li>
              <a class="icon solid fa-home" href="/"><span>Home</span></a>
            </li>
            <li>
              <a href="/professors" class="icon fa-chart-bar"
                ><span>All Professors</span></a
              >
            </li>
            <li>
              <a class="icon solid fa-cog" href="/professors/new"
                ><span>Add Professor</span></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <router-view />
    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <header>
          <h2>Questions or comments? <strong>Get in touch:</strong></h2>
        </header>
        <div class="row">
          <div class="col-6 col-12-medium">
            <section>
              <form method="post" action="#">
                <div class="row gtr-50">
                  <div class="col-6 col-12-small">
                    <input name="name" placeholder="Name" type="text" />
                  </div>
                  <div class="col-6 col-12-small">
                    <input name="email" placeholder="Email" type="text" />
                  </div>
                  <div class="col-12">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div class="col-12">
                    <a
                      href="/about"
                      class="form-button-submit button icon solid fa-envelope"
                      >Send Message</a
                    >
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="col-6 col-12-medium">
            <section>
              <p>
                We take your feedback as seriously as these teachers take their
                classes. Once we receive your message, we will respond to you
                within 24 hours.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
