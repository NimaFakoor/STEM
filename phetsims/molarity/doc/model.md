Model description of Molarity simulation

The basic equation for Molarity is:

M = mol/L

A chemical solution is a solute dissolved in a solvent. The solvent in this sim is pure water. The solutes are shown in
the Solutes combo box. Adding solute to solution beyond its saturated concentration results in formation of a
precipitate.

Concentration of a solution is:

M = min( (saturatedConcentration (M), ( (amountOfSolute (moles)) / (volumeOfSolution (L)) ))

When a solution is saturated, the amount of precipitate is:

precipitate (moles) = ( (amountOfSolute (moles)) / (volumeOfSolution (L)) ) - (saturatedConcentration (M))

The number of precipitate particles shown in the beaker is:

numberOfParticles = (precipitate (moles)) * particlesPerMole

where particlesPerMole is specified for each solute.

For additional details, consult these source files: MolarityModel, Solution, Solute.