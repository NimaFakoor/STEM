# Balancing Chemical Equations - model description

This simulation contains equations for reactions that have 2 reactants and 1 or 2 products, or 1 reactant and 2
products.

Each equation is described as a set terms, where a term is a coefficient and a molecule or atom. Reactant terms are on
the left-hand side of the equation, while product terms are on the right-hand side of the equation.

Associated with each term are 2 integer coefficients: the smallest coefficient that would result in a balanced
equation (call this the "balanced coefficient"), and the coefficient currently entered by the user (call this the "user
coefficient").

An equation is "balanced" when the user coefficient is an integer multiple N of the balanced coefficient, N is the same
for all terms in the equation, and N >= 1.

An equation is "balanced and simplified" when it is balanced and N=1.

Note that N=0 results in visual representations that might be incorrectly interpreted as "balanced". For example,
balance scales have the same number (0) of atoms on each side of the scale. But a reaction cannot take place with zero
reactants and products, so this is not a balanced equation.