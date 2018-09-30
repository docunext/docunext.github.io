---
title: Learning to Build Tests with Ruby
date: 2010-04-24
tags: testing
---
I'm taking a moment to study up on how to build tests with Ruby. I'm taking a step back and starting with some very simple examples, to make sure I have the concepts down cold!

<pre class="sh_ruby">

require 'test/unit'

class DoggyTest < Test::Unit::TestCase

    def test_chekit
        assert "hi" == "hi"
    end
    def test_barkit
        assert "bark" == "hi"
    end

end
</pre>

What do you know? Before I tried this I didn't know that test/unit required methods to be prefixed with "test\_" to be auto-run.

You learn something new everyday. I try to, if I can!

