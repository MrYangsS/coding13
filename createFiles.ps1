$components = @("Button", "Label", "Text", "Table", "Dropdown", "RadioButton", "Image", "HeroImage", "Card")

foreach ($component in $components) {
    $dirPath = "src/components/$component"
    New-Item -ItemType Directory -Force -Path $dirPath
    New-Item -ItemType File -Force -Path "$dirPath/$component.tsx"
    New-Item -ItemType File -Force -Path "$dirPath/$component.stories.tsx"
    if ($component -eq "Table") {
        foreach ($subComponent in @("TableHeader", "TableRow", "TableCell", "TableFooter")) {
            New-Item -ItemType File -Force -Path "$dirPath/$subComponent.tsx"
        }
    }
    New-Item -ItemType File -Force -Path "$dirPath/$component.types.tsx"
    New-Item -ItemType File -Force -Path "$dirPath/$component.tests.tsx"
    New-Item -ItemType File -Force -Path "$dirPath/index.ts"
}
