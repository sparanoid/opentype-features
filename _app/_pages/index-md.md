---
layout: page
permalink: /index-md/
thumb_force_logo: true
title: OpenType Features in CSS
css: |
  :root {
    --font-features: normal;
  }

  .hl {
    color: var(--link-color);
  }
---

{%- include amsf/core -%}

> Global `--font-features` is disabled on this page.

## Common/standard ligatures (liga)

- Enabled by Default
- [Warnock Pro](https://typekit.com/fonts/warnock-pro)

This feature replaces a sequence of glyphs with a single glyph, called a ligature, which is preferred for typographic purposes. When enabled, this feature inserts the ligatures which the designer/manufacturer judges should be used in normal conditions.

<p class="largetype tk-warnock-pro">
<span style='font-feature-settings: "liga" 0, "clig" 0'>ff fi fl ffi Th</span><br>
<span style='font-feature-settings: "liga", "clig"' class="hl">ff fi fl ffi Th</span>
</p>

## Contextual alternates (calt)

- Enabled by Default
- [Caflisch Script Pro](https://typekit.com/fonts/caflisch-script-pro)

This feature, in specified situations, replaces default glyphs with alternate forms which provide better joining behavior. Like ligatures (though not strictly a ligature feature), contextual alternates are commonly used to harmonize the shapes of glyphs with the surrounding context.

<p class="largetype tk-caflisch-script-pro">
<span style='font-feature-settings: "calt" 0'>The bloom has gone off the rose</span><br>
<span style='font-feature-settings: "calt"'>The <span class="hl">bloom</span> has g<span class="hl">one</span> off the <span class="hl">rose</span></span>
</p>

## Discretionary ligatures (dlig)

- [Warnock Pro](https://typekit.com/fonts/warnock-pro)

<p class="largetype tk-warnock-pro">
<span>ct sp st</span><br>
<span class="hl" style='font-feature-settings: "dlig"'>ct sp st</span>
</p>

## Small caps (smcp)

- San Francisco

<p class="largetype">
<span>Changing case to Small Caps.</span><br>
<span style='font-feature-settings: "smcp"'>C<span class="hl">hanging case to</span> S<span class="hl">mall</span> C<span class="hl">aps</span>.</span>
</p>

## Capitals to small caps (c2sc)

- San Francisco

<p class="largetype">
<span>Changing case to Small Caps.</span><br>
<span style='font-feature-settings: "c2sc", "smcp"'><span class="hl">Changing case to Small Caps</span>.</span>
</p>

## Case-sensitive Forms (case) 

- San Francisco

<p class="largetype">
<span>{¿¡HO-HO—HO!?} [Target] (New)</span><br>
<span style='font-feature-settings: "case"'><span class="hl">{</span>¿¡HO<span class="hl">-</span>HO<span class="hl">—</span>HO!?<span class="hl">}</span> <span class="hl">[</span>Target<span class="hl">]</span> <span class="hl">(</span>New<span class="hl">)</span></span>
</p>

## Swashes (swsh)

- [Bickham Script Pro 3](https://typekit.com/fonts/bickham-script-pro-3)

<p class="largetype tk-bickham-script-pro-3">
<span>Fred And Ginger</span><br>
<span style='font-feature-settings: "swsh"'><span class="hl">F</span>red <span class="hl">A</span>n<span class="hl">d</span> <span class="hl">G</span>inger</span>
</p>

## Historical Ligatures (hlig)

- Fedra Serif B

<p class="largetype">
<span>ſinful ſingular</span><br>
<span style='font-feature-settings: "hlig"'>ſinful ſingular</span>
</p>

## Historical Forms (hist)

- Fedra Serif A

<p class="largetype">
<span>Aparadise lost 1234567890</span><br>
<span style='font-feature-settings: "hist"'>Aparadise lost 1234567890</span>
</p>

## Stylistic alternates (salt)

<p class="largetype">
<span>An easy & breezy Sunday morning.</span><br>
<span style='font-feature-settings: "salt"'>An easy & breezy Sunday morning.</span>
</p>

## Lining figures (lnum)

<p class="largetype">
<span>0123456789</span><br>
<span style='font-feature-settings: "lnum"'>0123456789</span>
</p>

## Oldstyle figures (onum)

<p class="largetype">
<span>0123456789</span><br>
<span style='font-feature-settings: "onum"'>0123456789</span>
</p>

## Proportional figures (pnum)

<p class="largetype">
<span>0123456789</span><br>
<span style='font-feature-settings: "pnum"'>0123456789</span>
</p>

## Tabular figures (tnum)

<p class="largetype">
<span>0123456789</span><br>
<span style='font-feature-settings: "tnum"'>0123456789</span>
</p>

## Fractions (frac)

<p class="largetype">
<span>Add 1 3/4 C of flour, 1/2 cup at a time.</span><br>
<span style='font-feature-settings: "frac"'>Add 1 3/4 C of flour, 1/2 cup at a time.</span>
</p>

## Ordinals (ordn)

<p class="largetype">
<span>1st, 2nd, and 3rd place winners.</span><br>
<span style='font-feature-settings: "ordn"'>1st, 2nd, and 3rd place winners.</span>
</p>

## Stylistic sets (ss##)

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss01"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss02"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss02"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss03"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss04"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss05"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss06"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss07"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss08"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss09"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss10"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss11"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss12"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss13"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss14"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss15"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss16"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss17"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss18"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss19"'>{0123456789} [Gateway] -Driver</span>
</p>

<p class="largetype">
<span>{0123456789} [Gateway] -Driver</span><br>
<span style='font-feature-settings: "ss20"'>{0123456789} [Gateway] -Driver</span>
</p>

## Proportional Widths (pwid)

<p class="largetype">
<span>きょう、本を買った。</span><br>
<span style='font-feature-settings: "pwid"'>きょう、本を買った。</span>
</p>

## Proportional Kana (pkna)

<p class="largetype">
<span>あいうえおかきくけこがぎぐげご。</span><br>
<span style='font-feature-settings: "pkna"'>あいうえおかきくけこがぎぐげご。</span>
</p>

## Full Widths (fwid)

<p class="largetype">
<span>チーズバーガー12個をお願いします。</span><br>
<span style='font-feature-settings: "fwid"'>チーズバーガー12個をお願いします。</span>
</p>

## Half Widths (hwid)

<p class="largetype">
<span>チーズバーガー12個をお願いします。</span><br>
<span style='font-feature-settings: "hwid"'>チーズバーガー12個をお願いします。</span>
</p>

## Alternate Half Widths (halt)

<p class="largetype">
<span>きょう、『広辞苑』を買いたいです。</span><br>
<span style='font-feature-settings: "halt"'>きょう、『広辞苑』を買いたいです。</span>
</p>

## Third Widths (twid)

<p class="largetype">
<span>チーズバーガー120個をお願いします。</span><br>
<span style='font-feature-settings: "twid"'>チーズバーガー120個をお願いします。</span>
</p>

## Quarter Widths (qwid)

<p class="largetype">
<span>チーズバーガー1200個をお願いします。</span><br>
<span style='font-feature-settings: "qwid"'>チーズバーガー1200個をお願いします。</span>
</p>

## JIS78 Forms (jp78)

<p class="largetype">
<span>餌</span>
<span style='font-feature-settings: "jp78"'>餌</span>
</p>

## JIS83 Forms (jp83)

<p class="largetype">
<span>餌</span>
<span style='font-feature-settings: "jp83"'>餌</span>
</p>

## JIS2004 Forms (jp04)

<p class="largetype">
<span>餌</span>
<span style='font-feature-settings: "jp04"'>餌</span>
</p>

## Traditional Forms (trad)

<p class="largetype">
<span>台</span>
<span style='font-feature-settings: "trad"'>台</span>
</p>

## Ruby Notation Forms (ruby)

<p class="largetype">
<span>
  <ruby>
    日 <rp>(</rp><rt>に</rt><rp>)</rp>
    本 <rp>(</rp><rt>ほん</rt><rp>)</rp>
  </ruby>
</span>
<span style='font-feature-settings: "ruby"'>
  <ruby>
    日 <rp>(</rp><rt>に</rt><rp>)</rp>
    本 <rp>(</rp><rt>ほん</rt><rp>)</rp>
  </ruby>
</span>
</p>

## Horizontal Kana Alternates (hkna)

<p class="largetype">
<span>あいうえおかきくけこがぎぐげご。</span><br>
<span style='font-feature-settings: "hkna"'>あいうえおかきくけこがぎぐげご。</span>
</p>

## NLC Kanji Forms (nlck)

<p class="largetype">
<span>屡</span>
<span style='font-feature-settings: "nlck"'>屡</span>
</p>

## Alternate Annotation Forms (nalt)

<p class="largetype">
<span>あ</span>
<span style='font-feature-settings: "nalt"'>あ</span>
</p>

## Italics (ital)

<p class="largetype">
<span>Infinite Jestを読みたい。</span><br>
<span style='font-feature-settings: "ital"'>Infinite Jestを読みたい。</span>
</p>

## Kerning (kern)

<p class="largetype">
<span>Try As You Will</span><br>
<span style='font-feature-settings: "kern"'>Try As You Will</span>
</p>

## Glyph Composition/Decomposition (ccmp)

Work in progress

<p class="largetype">
<span>あ</span>
<span style='font-feature-settings: "ccmp"'>あ</span>
</p>

## Superscript (sups)

<p class="largetype">
<span>I shot the serif. 1</span><br>
<span style='font-feature-settings: "sups"'>I shot the serif. 1</span>
</p>

## Subscript (subs)

<p class="largetype">
<span>H2O, CO2</span><br>
<span style='font-feature-settings: "subs"'>H2O, CO2</span>
</p>

## Localised Forms (locl) 

If a font contains a `locl` feature, localized forms are activated automatically based on the language declared in the element's lang attribute.

<p class="largetype">
<span>гпклдвзитжц</span><br>
<span style='font-feature-settings: "locl"'>гпклдвзитжц</span>
</p>
